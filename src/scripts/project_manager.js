
import Project from './project.js'
import Task from './task.js'
export default class ProjectManager {
     /*
    Project manager class performs operations on Projects
    */
   #completedProjects = []
   #projects = []
   constructor () {
        this.#projects = this.getProjects()
        this.#setLocalStorage(this.#projects)
    }
    //Add to list
    #accessLocalStorage () {
        const projectData = localStorage.getItem('projectsData')
        if(projectData){
            return JSON.parse(projectData)
        }
        else return []
    }
    //Update completed projects
    addToCompleted(project){
        this.#completedProjects.push(project)
        this.removeProject(project)
    }
    //Add new project to projects list and save to local storage
    addToProjectList (newProject) {
        this.#updateLocalStorage(newProject)

    }
    //Filter project 
    #filterProjects(project){
        return this.#projects.filter(element => {
            element.name !== project.name
        })
    }
    //Get list of completed projects
    getCompleted(){
        return this.#completedProjects
    }
    //get projects
    getProjects(){
        this.#projects = []//Initialize to empty
        //Get project data from localstorage
        const projectData = this.#accessLocalStorage() 
        if(Array.isArray(projectData)){
            //Create projects for every piece of data
            projectData.forEach(data => 
                {
                    //Create project
                    const project = new Project(data.name)
                    project.setDescription(data.description)

                    //Create tasks for project
                    if(data.tasks){
                        data.tasks.forEach(taskData => {
                            const task = new Task(taskData.title)
                            task.setDescription(taskData.description)
                            task.setDueDate(taskData.dueDate)
    
                            //Add task to project
                            project.addTask(task)
                        })
                    }
                    //Add to project list
                    this.#projects.push(project)
                    
                })
        }
        return this.#projects
    }

    //remove project from list
    removeProject(project){
        //Filter out project
        this.#projects = this.#filterProjects(project)
        //Update local storage
        this.#updateLocalStorage()

        return this.#projects


    }
    #setLocalStorage(projects){
        if(projects.length >= 1){
            try {
                projects.forEach(
                    project => project.toJSON()//Convert to JSON format
                )
                localStorage.setItem('projectsData', JSON.stringify(projects))
            } catch (error) {
                console.error(error)
            }
        }
        else 
            localStorage.setItem('projectsData', projects)
    }
    #updateLocalStorage(project){
        const projects = this.getProjects()//Pull projects from local storage
        try {
            if(!projects.find(item => item.name === project.name))
                projects.push(project)//Add new project
            if((projects.find(item => item.name === project.name) && project.name.trim() !== 'Today'))
                alert(`Project named ${project.name} already exists`)            
        } catch (error) {
            console.error(error)
        }
        finally{
            this.#setLocalStorage(projects)//put projects back to localstorage
        }
    }

    //Update modified project ie when new task is added
    updateProject(project){
        //remove copy of project from projectlist
        this.#projects = this.#filterProjects(project)
        this.addToProjectList(project)//Push new copy
    }
    
}
