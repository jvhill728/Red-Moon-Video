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
        
        if (_user === newUser) {
            return next({
                name: 'UserExistsError',
                message: 'A user by that username already exists'
            });
        }
        if (password.length < 8) {
            return next({
                name: 'PasswordTooShort',
                message: 'Password length is less than 8 characters'
            });
        }

        const token = jwt.sign({
            id: newUser.id,
            username
        }, `${process.env.JWT_SECRET}`,
        {expiresIn: '1week'});

        return res.send({
            user: newUser,
            message: "You're signed up!",
            token
        })
    } catch (error) {
        return next(error);
    }
});


module.exports = usersRouter;