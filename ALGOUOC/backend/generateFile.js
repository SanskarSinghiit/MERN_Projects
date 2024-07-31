// import fs as 'fs';
const fs = require('fs');
const {v4: uuid} = require('uuid');
const path = require('path');

const dirCodes = path.join(__dirname, 'code');  // just creates an address;

if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes, {recursive: true}); // creating a folder
}

function generateFile(language, code) {
    const x = uuid();
    const fileName = `${x}.${language}`;
    const filePath = path.join(dirCodes, fileName); //  creting a file, and writing data to it,  // kisme likhna hai, kya likhna hai;
    fs.writeFileSync(filePath, code);
    return filePath;
    // const jobID = uuid();
    // return jobID;
}

// module.exports = {
//     generateFile,
// };

module.exports = generateFile;