
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
        let modifiedProject = null
        //Find unmodified project
        this.#projects.forEach(element =>{
            if(element.name === project.name)
                 //Modify project by adding task to task list
                element.addTask(task)
                modifiedProject = element
            })
            //Set local starage to array with the modifed project
            this.#setLocalStorage(this.#projects)
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
    //Edit Project: Take current project and data object 
    // containing name and description as properties
    editProject(currentProject, data) {
        const projects = this.getProjects()

        projects.forEach(
            project =>{
                if(project.name === currentProject.name){
                    //Change name
                    project.name = data.name
                    //Change description
                    project.setDescription(data.description)
                }
            }
        )
        //Update storage
        this.#setLocalStorage(projects)
        console.log(projects)
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
        const projects = []//Initialize to empty
        //Get project data from localstorage
        try {
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
                        projects.push(project)
                        
                    })
            }
            
        } catch (error) {
            console.error(`Something went wrong While getting projects from local Storage ${error}`)
        }
        finally{
            return projects
        }
    }
    
    //Mark project task as complete
    markTaskAsComplete(currentProject, completedTask) {
        this.#projects.forEach(project =>{
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
            }
        })
        //Update localStorage
        this.#setLocalStorage(this.#projects)
    }
    //remove project from list
    removeProject(project){
        //Filter out project
        this.#projects = this.#filterProjects(project)
        //Update local storage
        this.#updateLocalStorage()
        
        return this.#projects
    }
    // Remove task from project task likst
    removeTask(project, task){
        let modifiedProject = null
        // const projects = this.getProjects()
        // Search for the targe project in the list
        this.#projects.forEach(element =>{
            //If found
            if(element.name = project.name){
                //filter tasks list
                const newList = element.removeTask(task)

                //Assign tasks to filtered list
                element.taskList = newList

                //Modified project
                modifiedProject = element
            }
            
        })
        //set local storage
        this.#setLocalStorage(this.#projects)
        return modifiedProject
    }
    #setLocalStorage(projects){
        try {
            const  serializedProjects = projects.map(project => project.toJSON())//Convert to JSON format
            localStorage.setItem('projectsData', JSON.stringify(serializedProjects))
        } catch (error) {
            console.error(error)
        } finally{
            localStorage.setItem('projectsData', JSON.stringify(projects))
            
        }
    }
    #updateLocalStorage(project){
        const projects = this.getProjects()
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
