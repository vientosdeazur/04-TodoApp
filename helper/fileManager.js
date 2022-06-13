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
    data = getData();
    if (data){
        data = data.splice (i-1,1);   
        saveData(data);
    } else {
        console.log ("No data Available");
    }
}

const editData = (i) => {
    data = getData();
    data = data.map ((done , index)=>{
       if (data[index] == data[i]){
        data[index].isDone = true;
       } 
       return data;
    }  
    )
    saveData(data);
}


module.exports = {
saveData,
getData,
eraseData,
editData
}