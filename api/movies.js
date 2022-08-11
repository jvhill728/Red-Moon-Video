const express = require('express');
const moviesRouter = express.Router();
const { createMovie, getAllMovies, getMovieById } = require('../db');

moviesRouter.use((req, res, next) => {
    console.log("Making a request to /movies");

    next();
});

moviesRouter.get('/', async (req, res, next) => {
    try{
        const allMovies = await getAllMovies();

        console.log("getting all movies", allMovies)

        res.send(allMovies);
    } catch(error) {
        throw error;
    }
});


module.exports = moviesRouter;