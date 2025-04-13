const express = require('express');
const mongoose = require('mongoose');
const villageRoutes = require('./routes/villageRoutes');

const app = express(); // create an instance of express
const PORT = 3000; // port on which the server is running

app.use(express.json()); // Middleware to parse JSON requests
app.use('/api/villages', villageRoutes); // Use the village routes for any request to /api/villages

mongoose.connect('mongodb://localhost:27017/villageDB', { // connecttion to MongoDb
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Start th server and listen on the defined port
}).catch(err => console.error(err)); // Log any errors that occur during the connection
