const  Client = require('pg');

const DB_NAME = 'Red-Moon-Video-dev';

const client =
   new Client(process.env.DATABASE_URL || `postgres:localhost:4000/${DB_NAME}`);

// let client;

// if(process.env.CI) {
//     client = new Client({
//         host: 'localhost',
//         port: 4000,
//         user: 'postgres',
//         password: 'postgres',
//         database: 'postgres',
//     });
// } else {
//     client = new Client(DB_URL);
// }


module.exports = client;
export {};