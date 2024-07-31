// const express = require('express');
import express from "express";
import cors from 'cors';


const app = express();
app.use(cors());

app.use(express.json());

app.listen(8000, () => {
  console.log(`Server running at http://localhost:8000`);
});


app.get('/', (req, res) => {
  res.send(`<h1>This is Home Page</h1>`);
})

app.get('/register', (req, res) => {
  res.send(`<h1>This is Register Page</h1>`);  
})

app.post('/register', (req, res) => { // this post will be triggered when we submit the form
  const {name, email} = req.body;
  console.log(`Received data name = ${name}, and email = ${email}`);
  // res.send(name);
  res.json({ message: 'Registration successfully completed', data: { name, email } });  // sends json data back to the client, as a response, of posting, it is objectt, with object.data, and object.name
  // res.send(`<h1>This is Register Page</h1>`)
  // alert(`Received data name = ${name}, and email = ${email}`);
})