// import express from 'express'
const express = require('express');
// import generateFile from './generateFile';
// const {generateFile} = require('./generateFile');
const generateFile = require('./generateFile');
const outputFile = require('./outputFile');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json({"online": "compiler"});
    // res.status(500).json('oh noes!');
})

app.post('/run', async (req, res) => {
    // res.send({hello: "world"});
    // res.json({hello: "world"});
    const {language='cpp', code} = req.body;
    if(code === undefined){
        res.status(404).json({success : "false", message: "Empty code body!!"});
    }
    const filePath = await generateFile(language, code);
    // const output = await getOutput(filePath);
    res.send(filePath);
    // res.json({language : "code"});
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000!');
})