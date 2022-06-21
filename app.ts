import express, { Application, Request, Response, NextFunction } from 'express';
require('dotenv').config();
const server: Application = express();

// Using req, res, next to show something on localhost:4000
server.get('/', (req: Request, res: Response) => {
    res.send('Garcon! More Moet!');
});

// setting up server on localhost:4000
server.listen(4000, () => console.log('Server is up'));

const cors = require('cors');
server.use(cors());

