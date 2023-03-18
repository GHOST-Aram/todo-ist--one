
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
    addTask(project, task){
        // Initialize modified project
        let modifiedProject = null

        //Find unmodified project
        this.#projects.forEach(element =>{
            if(element.name === project.name)
            //Modify project by adding task to task list
                element.addTask(task)
            //Change value of modified project to current project    
                modifiedProject = element
            })
            //Set local starage to array with the modifed project
            this.#setLocalStorage(this.#projects)
            //Return modifed project to be displayed as modified
            return modifiedProject
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
        return this.#projects.filter(element => element.name !== project.name)
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
                            task.complete = taskData.complete
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

    //Mark project task as complete
    markTaskAsComplete(currentProject, completedTask) {
        let modifiedProject = null
        //Get projects
        const projects = this.getProjects()
        projects.forEach(project =>{
            //Find current project in list
            if (project.name === currentProject.name){
                //Get project tasks
                project.getTasks().forEach(task =>{
                    //Find completed task from tasks
                    if(task.id === completedTask.id){
                        //Mark this tas as complete
                        task.markAsComplete()
                    }
                    
                })
                //Reasign value to modified project
                modifiedProject = project
            }
        })
        //Update localStorage
        this.#setLocalStorage(projects)
        //Gte updated items from local storage
        console.log(this.getProjects())
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
        try {
            const  serializedProjects = projects.map(project => project.toJSON())//Convert to JSON format
            localStorage.setItem('projectsData', JSON.stringify(serializedProjects))
            console.log(serializedProjects)
        } catch (error) {
            console.error(error)
        } finally{
            localStorage.setItem('projectsData', JSON.stringify(projects))
            
        }
    }
    #updateLocalStorage(project){
        const projects = this.getProjects()//Pull projects from local storage
        try {
            if(!projects.find(item => item.name === project.name))
                projects.push(project)//Add new project
            else if((projects.find(item => item.name === project.name) && project.name.trim() !== 'Today'))
                alert(`Project named ${project.name} already exists`)            
        } catch (error) {
            console.error(error)
        }
        finally{
            this.#setLocalStorage(projects)//put projects back to localstorage
        }
    }  
}
