export default class ProjectManager {
     /*
    Project manager class performs operations on Projects
    */
    #projects = []
    #completedProjects = []
    constructor () {

    }
    //Add to list
    addProject(project){
        this.#projects.push(project)
    }
    //Update completed projects
    addToCompleted(project){
        this.#completedProjects.push(project)
        this.removeProject(project)
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
