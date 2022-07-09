const client = require('../client');

const createMovie = async ({
    title, releaseDate, genre, tags
}) => {
    try {
        const { rows: [movie] } = await client.query(`
        INSERT INTO movies (title,
            "releaseDate",
            genre,
            tags)
        VALUES($1, $2, $3, $4)
        RETURNING *;
        `, [title, releaseDate, genre, tags])

        return movie
    } catch (error) {
        throw error
    }
}

const getAllMovies = async () => {
    try {
        const { rows: movies } = await client.query(`
        SELECT * 
        FROM movies
        `)

        console.log('These are our movies', movies)

        return movies
    } catch (error) {
        throw error
    }
}

const getMovieById = async (id) => {
    try {
        const { rows: [movie] } = await client.query(`
        SELECT * FROM movies
        WHERE id = ($1);
        `, [id])

        return movie
    } catch (error) {
        throw error
    }
}

module.exports = {
    createMovie,
    getAllMovies,
    getMovieById
}