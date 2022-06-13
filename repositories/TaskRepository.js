const Task = require ('../models/Task');
const {getData, saveData, eraseData,editData} = require ('../helper/fileManager')

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

    createTask(title){
        const task = new Task(title);
        this._tasks.push(task);
        saveData(this._tasks);
    }

    deleteTask(i){
        eraseData(i);
        console.log ( "Tarea Eliminada con exito");

    }

    completeTask(i){
        editData(i);
        console.log ("La tarea se encuentra Completada");
    }





    
}

module.exports = TaskRepository;