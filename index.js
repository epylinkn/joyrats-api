const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');

const PORT = config.PORT;
const HOST = config.HOST

// Handle data in a nice way
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const publicURL = path.resolve(`${__dirname}/public`);

// Set your static server
app.use(express.static(publicURL));

// Set your static html file
app.get('/', (req, res) => {
  res.send("You're doing it wrong!")
});

// GET: "fake-abraham"
app.get('/fake-abraham', async (req, res) => {
  try {
    const imageNumber = Math.floor(Math.random() * 100)
    const data = {
      url: `${HOST}/textures/texture${imageNumber}.jpg`,
    }
    res.json(data);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

// Start listening
app.listen(PORT, () => {
  console.log(`see the magic`);
});
