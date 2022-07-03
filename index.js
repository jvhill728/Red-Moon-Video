
require('dotenv').config();
const express = require('express');
const server = express();
const PORT = process.env.PORT || 4000;

// Using req, res, next to show something on localhost:4000


const cors = require('cors');
server.use(cors());

const morgan = require('morgan');
server.use(morgan("dev"));
server.use(express.json());

const path = require('path');
server.use(express.static(path.join(__dirname, 'build')));

server.use('/api', require('./api'));

// by default serve up the react app if we don't recognize the route
server.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

// bring in the DB connection
const { client } = require('./db');

// define a server handle to close open tcp connection after unit tests have run
const handle = server.listen(PORT, async () => {
    console.log(`Server is up and running on port ${PORT}!`);

    try {
        await client.connect();
        console.log('Database is open for business!');
    } catch (error) {
        throw error
    }
});


module.exports = { server, handle };