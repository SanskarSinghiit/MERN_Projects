// const express = require('express');
import express from "express";
const app = express();
const port = 3000;

// Use JSON middleware
app.use(express.json());

// In-memory data store
let dataStore = {
  1: { id: 1, name: 'Item 1', description: 'Description for Item 1' },
  2: { id: 2, name: 'Item 2', description: 'Description for Item 2' }
};

app.get('/', (req, res) => {
    res.send("You are on the Home Page!!!");
});

app.get('/data', (req, res) => {
    res.send("You are now at the inner part of the database!!!")
});

// Endpoint to get data by ID
// app.get('/data/:id', (req, res) => {
//   const id = req.params.id;
//   const data = dataStore[id];
  
//   if (data) {
//     res.json(data);
//   } else {
//     res.status(404).json({ message: 'Data not found' });
//   }
// });

// // Endpoint to add new data
// app.post('/data', (req, res) => {
//   const { id, name, description } = req.body;
  
//   if (id && name && description) {
//     dataStore[id] = { id, name, description };
//     res.status(201).json({ message: 'Data added successfully' });
//   } else {
//     res.status(400).json({ message: 'Invalid data' });
//   }
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
