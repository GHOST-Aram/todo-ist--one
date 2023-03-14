import TaskManager from "./task_manager";

export default class Project extends TaskManager {

    //Project open
    #complete = false
    #description = ''
    
    constructor(name){
        super()
        this.name = name
    }
   
    //return value of description
    getDescription(){
        return this.#description
    }
    //is complete
    isComplete(){
        return this.#complete
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
   
    //initialize descripion
    setDescription(description){
        this.#description = description
    }
    toJSON (){
        return {
            "name": this.name,
            "complete": this.isComplete(),
            "description": this.getDescription(),
            "tasks": this.getTasks()
        }
    }

}

