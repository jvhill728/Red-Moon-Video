const  client = require('./client');
const { createUser, getUser, getUserByUsername } = require('./models/users');
const { createMovie, getAllMovies, getMovieById } = require('./models/movies');


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
                genre VARCHAR(255) NOT NULL,
                tags VARCHAR(255) NOT NULL
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

async function createInitialMovies() {
    try {
        console.log('Starting to make some movies!');

        const moviesToCreate = [
            { id:"1", title: "The Thing", releaseDate:"1982", genre:"horror, sci-fi", tags:["gory", "body horror", "80s", "aliens"]},
            { id:"2", title:"Halloween", releaseDate:"1979", genre:"horror", tags:["slasher", "70s", "final girl", "nudity"] },
            { id:"3", title:"A Nightmare on Elm Street", releaseDate:"1984", genre:"horror", tags:["gory", "80s", "final girl", "slasher"] },
            { id:"4", title:"Night of the Creeps", releaseDate:"1986", genre:"horror", tags:["gory", "80s", "nudity", "camp", "satire", "aliens"] },
            { id:"4", title:"An American Werewolf in London", releaseDate:"1981", genre:"horror, comedy", tags:["gory", "80s", "creature feature", "nudidy"] },
            { id:"5", title:"Evil Dead 2", releaseDate:"1987", genre:"horror, comedy", tags:["gory", "80s", "funny", "satire", "possession"] },
        ]
        const movies = await Promise.all(moviesToCreate.map(createMovie));

        console.log('Movies created:');
        console.log(movies);
        console.log(movies[3].id);

        console.log('Finished making the movies!');
    } catch (error) {
        console.log('Error making the movies!');
        throw error;
    }
}


async function rebuildDB() {
    try {
        client.connect();
        await dropTables();
        await createTables();
        await createInitialUsers();
        await createInitialMovies();

    } catch (error) {
        console.log('Error during rebuildDB!')
        throw error;
    }
}

rebuildDB()
    .catch(console.error)
    .finally(() => client.end());

module.exports = {
    rebuildDB
}
