export default class Task {
    /*
        Task class create Task objects
    */

    //Task.description
    #description = ''

    //Task.duedate
    #dueDate = null

    //Task.priority
    constructor(title){
        this.title = title
        this.id = this.generateId()
        this.complete = false

    }
    //Edit task properties
    edit(data){
        this.title = data.title
        this.#description = this.setDescription(data.description)
        this.#dueDate = this.setDueDate(data.dueDate)
        
    }
    //return value of description
    getDescription(){
        return this.#description
    }
    //return due date
    getDueDate(){
        return this.#dueDate
    }
    //Genrate id
    generateId(){
        return this.title.replaceAll(' ', '-').toLowerCase()
    }
    //Check if complete
    isComplete(){
        return this.complete
    }
    //Mark as complete
    markAsComplete(){
        this.complete = true
    }
    //Mark as incomplete
    markAsIncomplete(){
        if(this.complete)
            this.complete = false
    }
    //initialize descripion
    setDescription(description){
        this.#description = description
    }
    //set due date
    setDueDate(dueDate){
        this.#dueDate = dueDate
    }
    toJSON () {
        return {
            "title": this.title,
            "complete": this.isComplete(),
            "description": this.getDescription(),
            "dueDate": this.getDueDate()
        }
    }
}