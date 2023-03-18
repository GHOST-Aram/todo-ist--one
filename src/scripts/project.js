import TaskManager from "./task_manager.js";
export default class Project extends TaskManager {

    //Project open
    #description = ''
    constructor(name){
        super()
        this.name = name
        this.complete = false
    }
    addTask(task){
        this.getTasks().push(task)
    }
    //return value of description
    getDescription(){
        return this.#description
    }
    //is complete
    isComplete(){
        return this.complete
    }
    
    //Mark as complete
    markAsComplete(){
        this.complete = true
    }
    //Mark as incomplete
   
    //initialize descripion
    setDescription(description){
        this.#description = description
    }
    toJSON (){
        return {
            "name": this.name,
            "complete": this.isComplete(),
            "description": this.getDescription(),
            "tasks": this.getTasks().map(task =>task = task.toJSON()),
        }
    }

}

