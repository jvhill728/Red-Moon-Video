
require('dotenv').config();
const app = require('express');
const PORT = process.env.PORT || 4000;

// Using req, res, next to show something on localhost:4000
app.get('/', (req, res) => {
    res.send('Garcon! More Moet!');
});

const cors = require('cors');
app.use(cors());

const morgan = require('morgan');
app.use(morgan("dev"));
app.use(express.json());

const { client } = require('./src/db');

// setting up server on localhost:4000
app.listen(PORT, () => console.log(`Server is up on port ${PORT}`));

module.exports = {
    app
}