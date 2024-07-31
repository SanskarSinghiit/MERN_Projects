// const express = require('express');
import express from "express";
import cors from 'cors';
import User from './models/User';
// import bcrypt from 'bcrypt';


MONGO_URI='mongodb+srv://sanskarsinghiit:sanskarsinghiit@julycluster0.neprj2q.mongodb.net/?retryWrites=true&w=majority&appName=JulyCluster0';

const app = express();
app.use(cors());  // Cross Origin Resource Sharing, allowed frontend http://localhost:5173, to be connected to backend http://localhost:8000;

app.use(express.json());  // this line is important, as user data from frontend sent to backend comes in json, so without parsing the data, we can't use it for our backend;  

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

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
  res.send({ message: 'Registration successfully completed', data: { name, email } });  // sends json data back to the client, as a response, of posting, it is objectt, with object.data, and object.name
  // res.send(`<h1>This is Register Page</h1>`)
  // alert(`Received data name = ${name}, and email = ${email}`);
}) 