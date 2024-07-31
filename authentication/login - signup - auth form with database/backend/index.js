// const express = require('express');
import express from "express";
import cors from 'cors';
import User from './models/User.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
// import bcrypt from 'bcrypt';
const MONGO_URI = process.env.MONGO_URI;
const app = express();
app.use(cors());  //--/ Cross Origin Resource Sharing, allowed frontend http://localhost:5173, to be connected to backend http://localhost:8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  // this line is important, as user data from frontend sent to backend comes in json, so without parsing the data, we can't use it for our backend;  

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))   // is used to handle a promise that has been resolvved, successful, .then and .catch code blocks are used together for promise handling 
  .catch(err => console.log('MongoDB connection error:', err));

app.listen(8000, () => {
  console.log(`Server running at http://localhost:8000`);
});

app.get('/', (req, res) => {  
  res.send(`<h1>This is Home Page</h1>`);
})

app.get('/register', (req, res) => {
  // console.log("hello");
  res.send(`<h1>This is Register Page</h1>`);
})

app.post('/register', async (req, res) => { // this post will be triggered when we submit the form // When you didn't use a database, the user registration process was likely simpler and did not involve asynchronous operations. Asynchronous operations are necessary when you are working with external resources such as databases, APIs, or file systems, which do not return their results immediately.
  // const {name, email} = req.body;
  // // res.send(`<h1>This is Register Page Successful</h1>`);
  // console.log(`this is the name -> ${req.body.name} and this is the email -> ${req.body.email}`);
  // const newUser = new User({ name, email });
  // try {
  //   const savedUser = await newUser.save();
  //   res.json({ message: 'Registration successful', data: { name: savedUser.name, email: savedUser.email } });
  // } catch (error) {
  //   res.status(400).json({ message: 'Error registering user', error });
  // }
  const {name,email} = req.body; // how do we know name and email is in req.body,thatis fromaxios in Auth.jsx
  const newUser = new User({name, email});
  const findUser = await User.findOne({email});
  /* 
  When using Mongoose, you interact with MongoDB through Mongoose models, not directly through the MongoDB native driver methods.
  Here's why you use User.findOne() instead of db.findOne():
  */
  if(findUser){
      res.status(400).json({message: 'User already exists', findUser});
      console.log('User already exists');
      // alert('User already exists')
      return;
  }
  try{
    const savedUser = await newUser.save();
    res.json({message: `Registration Successful`,data: { name: savedUser.name, email: savedUser.email }});
  } catch(e){
    res.status(400).json({message: 'Error while regitering user', e}); //now  i want that if user is already registered it shows that
  }
});