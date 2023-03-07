import TaskManager from "./task_manager";

export default class Project extends TaskManager {
    constructor(name){
        super()
        this.name = name
    }
}

