const express = require('express');
const jwt = requre('jsonwebtoken');
const usersRouter = express.Router();
const { getUserByUsername, createUser, getAllUsers, getUser } = require('../db/models/users');
const bcrypt = require('bcrypt');

usersRouter.use((req, res, next) => {
    console.log('A request is being made to /users');
    next();
});

usersRouter.get('/', async (req, res, next) => {
    try {
        const allUsers = await getAllUsers();
        console.log('Getting all users', allUsers)

        res.send(allUsers);
    } catch (error) {
        next(error)
    }
});

usersRouter.post('/register', async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const newUser = await createUser({ username, passowrd });
        const _user = await getUserByUsername(username);
        
    }
})