const { inquirerMenu , inquirerInput} = require ('./helper/inquirer');
const TaskRepository = require('./repositories/TaskRepository');

const main = async() => {
    
    const taskRepository = new TaskRepository();
    let option ='';

    do {
    
        option = await inquirerMenu();

        switch (option) {
            case 1:
                
                console.log('Usted selecciono Crear Tarea');
    
                // Hacer que el usuario pueda ingresar el titulo de la tarea
    
                const title = await inquirerInput('Task Title');
                console.log (title);
                taskRepository.createTask(title); 
                break;
        
            case 2:
                
                const allTask = taskRepository.getAllTask();
                console.log (allTask);
                break;
                // Mostrar la lista de tareas de la base de datos
    
        
    }}  while (option !== 0);

         
}

main ();