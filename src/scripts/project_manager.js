import Project from "./project"

export default class ProjectManager {
     /*
    Project manager class performs operations on Projects
    */
    #projects = []
    #completedProjects = []
    constructor () {

    }
    //Add to list
   
    //Update completed projects
    addToCompleted(project){
        this.#completedProjects.push(project)
        this.removeProject(project)
    }
    //create new project
    createNewProject(projectName, description){
        //Create with name
        const newProject = Project(projectName)
        //set description
        newProject.setDescription(description)
        //Add to list
        this.#projects.push(newProject)

        return newProject
    }
    //Get list of completed projects
    getCompleted(){
        return this.#completedProjects
    }
    //get projects
    getProjects(){
        return this.#projects
    }
    //remove project from list
    removeProject(project){
        this.#projects = this.#projects.filter(element => {
            if(element === project)
                return false
            else
                return true
        })
    }

}
