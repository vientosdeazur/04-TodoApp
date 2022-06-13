const inquirer = require ('inquirer');
const { getData } = require('./fileManager');
require ('colors');

const menu = [
    {
        type: 'list',
        name: 'option',
        message:'What do you want to do?',
        choices: [
            {
                value: 0,
                name: `${'0-'.blue} Salir`
            },
            {
                value: 1,
                name: `${'1-'.blue} Create Task`
            },
            {
                value: 2,
                name: `${'2-'.blue} Get Tasks`
            },
            {
                value: 3,
                name: `${'3-'.blue} Erase Task`
            },
            {
                value: 4,
                name: `${'4-'.blue} Complete Task`
            }
          
        ]
    }
];

const inquirerTaskMenu = async () => {
    
    const data = getData();
    const titles = data.map ((datos, i) => ({
        value: i,
        name: `${i + '-'.blue + datos.title}`
        }));


    const taskMenu = 
        {            
            type: 'list',
            name: 'option',
            message: 'What Task you desire to erase?',
            choices: titles 
            }        

        

    const {option} = await inquirer.prompt(taskMenu);
    return option;
} 


const inquirerMenu = async() => {
    console.log ('============================'.blue);
    console.log ('SELECT AN OPTION');
    console.log ('============================'.blue);

    const {option} = await inquirer.prompt(menu);
    return option;

}

const inquirerInput = async( message ) => {

    const question = [
            {
                type: 'input',
                name: 'description',
                message

            }
    ]
    const {description} = await inquirer.prompt (question);
    return description;
}


const inquirerCompleteTaskMenu = async () => {
    
    const data = getData();
    const titles = data.map ((datos, i) => ({
        value: i,
        name: `${i + '-'.blue + datos.title}`
        }));


    const taskCompleteMenu = 
        {            
            type: 'list',
            name: 'option',
            message: 'What Task is complete?',
            choices: titles 
            }        

        

    const {option} = await inquirer.prompt(taskCompleteMenu);
    return option;
} 


module.exports = {
    inquirerMenu,
    inquirerInput,
    inquirerTaskMenu,
    inquirerCompleteTaskMenu   
}