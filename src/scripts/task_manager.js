export default class TaskManager {
    /*
    Task manager class performs operations with and on Task objects
    Used together with Task class
    */
    taskList = []
    #completedTasks = []
    constructor () {

    }
    //Add to list
    addTask(task){
        this.taskList.push(task)
    }
    //Update completed tasks
    addToCompleted(task){
        this.#completedTasks.push(task)
        this.removeTask(task)
    }
    //Get list of completed tasks
    getCompleted(){
        return this.#completedTasks
    }
    //get tasks
    getTasks(){
        return this.taskList
    }
    //remove task from list
    removeTask(task){
        const tasks = this.taskList.filter(element => {
            if(element.id === task.id)
                return false
            else
                return true
        })
        return tasks
    }
   
}
