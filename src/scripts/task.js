export default class Task {
    /*
        Task class create Task objects
    */

    //Task.description
    #description

    //Task.duedate
    #dueDate

    //Task.priority
    constructor(title){
        this.title = title
        this.isComplete = false
    }
    //return value of description
    getDescription(){
        return this.#description
    }
    //return due date
    getDueDate(){
        return this.#dueDate
    }
    //initialize descripion
    setDescription(description){
        this.#description = description
    }
    //set due date
    setDueDate(dueDate){
        this.#dueDate = dueDate
    }
}