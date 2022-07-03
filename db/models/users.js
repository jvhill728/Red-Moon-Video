const client = require('../client');
const bcrypt = require('bcrypt');

const createUser = async ({username, password, isAdmin})