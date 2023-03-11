import TaskManager from "./task_manager";

export default class Project extends TaskManager {

    //Project open
    #projectOpen = false
    #complete = false
    #description = ''
    #name =''
    
    constructor(){
        super()
    }
    //close project
    close(){
        this.#projectOpen = false
    }
    //return value of description
    getDescription(){
        return this.#description
    }
    //get name
    getName(){
        return this.#name
    }
    //is complete
    isComplete(){
        return this.#complete
    }
    //Check if project is open
    isOpen(){
        return this.#projectOpen
    }
    //Mark as complete
    markAsComplete(){
        this.#complete = true
    }
    //Mark as incomplete
    markAsIncomplete(){
        if(this.#complete)
            this.#complete = false
    }
    //Open project
    open(){
        this.#projectOpen = true
    }
    //initialize descripion
    setDescription(description){
        this.#description = description
    }

    // Set name
    setName(name){
        this.#name = name
    }

}

