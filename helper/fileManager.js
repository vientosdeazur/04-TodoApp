const fs = require ('fs');
const { title } = require('process');

const name = './database/data.json';

const saveData = (data) => {
    fs.writeFileSync(name, JSON.stringify(data));
}

const getData = () => {

    if ( !fs.existsSync(name)) {
        return null;
    }

    const data = fs.readFileSync(name, {encoding: 'utf8'});
    return JSON.parse(data);

}

const eraseData = (i) => {
    let data = getData();
    if (data){
        data.splice(i,1);
        saveData(data);
    } else {
        console.log ("No data Available");
    }
}

const editData = (i) => {
    let data = getData();
    if(data){
        data[i].isDone = true; 
        saveData(data);
    }    
}


module.exports = {
saveData,
getData,
eraseData,
editData
}