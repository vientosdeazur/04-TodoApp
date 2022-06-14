const { inquirerMenu , inquirerInput, inquirerTaskMenu, inquirerCompleteTaskMenu} = require ('./helper/inquirer');
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
            case 3:

                const index = await inquirerTaskMenu();
                taskRepository.deleteTask(index);
                break;

            case 4:     
          
                const index2 = await inquirerCompleteTaskMenu();
                taskRepository.completeTask(index2);
                break;

    }}  while (option !== 0);

         
}

main ();