import TaskManager from "./task_manager";

export default class Project extends TaskManager {

    //Project open
    #projectOpen = false
    constructor(name){
        super()
        this.name = name
    }
    //close project
    close(){
        this.#projectOpen = false
    }
    //Check if project is open
    isOpen(){
        return this.#projectOpen
    }
    //Open project
    open(){
        this.#projectOpen = true
    }

}

