const  client = require('./client');
const { createUser, getUser, getUserByUsername } = require('./models/users');


async function dropTables() {
    console.log('Dropping All Tables...');

    try {
        await client.query(`
        DROP TABLE IF EXISTS movie_tags;
        DROP TABLE IF EXISTS tags;
        DROP TABLE IF EXISTS movies;
        DROP TABLE IF EXISTS users;
        `);

        console.log('Finshed dropping those tables!');
    } catch (error) {
        console.log('Error dropping tables!');
        throw error;
    }
}

async function createTables() {
    console.log('Building those tables...');

    try {
        await client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            ); 
            CREATE TABLE movies (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) UNIQUE NOT NULL,
                "releaseDate" INTEGER,
                genre VARCHAR(255) NOT NULL
            );
            CREATE TABLE tags (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL
            );
            CREATE TABLE movie_tags (
                "movieId" INTEGER REFERENCES movies(id),
                "tagId" INTEGER REFERENCES tags(id),
                UNIQUE ("movieId", "tagId")
            );
        `);

        console.log('Finished building the tables!');
    } catch (error) {
        console.log('Error building tables!');
        throw error;
    }
}

const usersToCreate = [
    { username: 'Jason', password: 'Crystallake', email: 'CampBlood69@gmail.com' },
    { username: 'Michael', password: 'LaurieS', email: 'StabbyBoy79@gmail.com' },
    { username: 'LeathFace', password: 'Screee', email: 'AllnFamilyTX@aol.com' },
    { username: 'Freddy', password: 'DreamLord', email: 'DreamyFace1234@aol.com' },
]

async function createInitialUsers() {
    console.log('Starting to create users...');

    try {
        const users = await Promise.all(usersToCreate.map(createUser));

        console.log('Users created:');
        console.log(users);
        console.log('Finished creating users!');
    } catch (error) {
        console.log('Error Creating Users!');
        throw error;
    }
}


async function rebuildDB() {
    try {
        client.connect();
        await dropTables();
        await createTables();
        await createInitialUsers();

    } catch (error) {
        console.log('Error during rebuildDB!')
        throw error;
    }
}

rebuildDB()
    .then(populateInitialData)
    .catch(console.error)
    .finally(() => client.end());

module.exports = {
    rebuildDB
}
