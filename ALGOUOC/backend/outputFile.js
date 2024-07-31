const fs = require('fs');
// const {v4: uuid} = require('uuid');
const path = require('path');
const {exec} = require('child_process');

const outputPath = path.join(__dirname, 'output');

if(!fs.existsSync(outputPath)){
    fs.mkdirSync(outputPath);
}

function getOutput(filePath){
//we want to rename our a.exe to the jobID.exe; jobID is that hash string
// const fileName = path.basename(
    const codePath = path.basename(filePath);
    const jobID = fileName.split('.')[0];
    // fileName = hash string only right now;
    const outPath = `${filePath.split('.')[0]}.exe`;

    return new Promise((resolve, reject) => {
        exec()
    })


}

module.exports = {
    getOutput,
}