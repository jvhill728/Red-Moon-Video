// // Connect to DB
// const  { Client } = require('pg');

// // change the DB_NAME string to whatever your group decides on
// const DB_NAME = 'Red-Moon-Video-dev';

// const DB_URL = process.env.DATABASE_URL || `postgres://localhost:4000/${DB_NAME}`;

// let client;

// // github actions client config
// if (process.env.CI) {
//   client = new Client({
//     host: 'localhost',
//     port: 4000,
//     user: 'postgres',
//     password: 'postgres',
//     database: 'postgres',
//   });
// } else {
//   // local / heroku client config
//   client = new Client(DB_URL);
// }

// module.exports =  client;

const { Client }  = require('pg');

const DB_NAME = 'Red-Moon-Video-dev';

const client = new Client(process.env.DATABASE_URL || `postgres://localhost:4000/${DB_NAME}`)


module.exports = { 
   client
}

export{}
