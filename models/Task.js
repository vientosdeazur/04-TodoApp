const { v4: uuidv4 } = require('uuid');

// Un objeto es una instancia de una clase

class Task {

    id = '';
    title = '';
    isDone = null;
    created = null;
    finished = null;

    constructor(title){
        this.id = uuidv4();
        this.title= title;
        this.isDone = false;
        this.created = new Date();
    }

}

module.exports = Task;