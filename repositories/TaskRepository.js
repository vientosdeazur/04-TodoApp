const Task = require ('../models/Task');
const {getData, saveData} = require ('../helper/fileManager')

class TaskRepository {

    _tasks = null;

    constructor() {
        const data = getData();
        if(data){
            this._tasks = data;
        }else{
            this._tasks = [];
        }
        
    }

    getAllTask(){
        return this._tasks;
    }


    /*
        Falta persistir datos en archivo
    */

    createTask(title){
        const task = new Task(title);
        this._tasks.push(task);
        saveData(this._tasks);
    }

    deleteTask(){

    }

    completeTask(){


    }





    
}

module.exports = TaskRepository;