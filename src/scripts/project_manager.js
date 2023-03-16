
import Project from './project'
import Task from './task'
export default class ProjectManager {
     /*
    Project manager class performs operations on Projects
    */
   #completedProjects = []
   #projects = []
    constructor () {

    }
    //Add to list
    #accessLocalStorage () {
        return JSON.parse(localStorage.getItem('projectsData'))
    }
    //Update completed projects
    addToCompleted(project){
        this.#completedProjects.push(project)
        this.removeProject(project)
    }
    //Add new project to projects list and save to local storage
    addToProjectList (newProject) {
        this.#projects.push(newProject)
        this.#updateLocalStorage()

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
                    data.tasks.forEach(taskData => {
                        const task = new Task(taskData.title)
                        task.setDescription(taskData.description)
                        task.setDueDate(taskData.dueDate)

                        //Add task to project
                        project.addTask(task)
                    })
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
    #updateLocalStorage(){
        const projects = this.#projects.forEach(
            project => project.toJSON()//Convert to JSON format
        )
        localStorage.setItem('projectsData', JSON.stringify(projects))
    }

    //Update modified project ie when new task is added
    updateProject(project){
        //remove copy of project from projectlist
        this.#projects = this.#filterProjects(project)
        this.project.push(project)//Push new copy
    }

}
