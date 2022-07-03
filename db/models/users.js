const client = require('../client');
const bcrypt = require('bcrypt');

const createUser = async ({username, password, email}) => {
    try {
        console.log('Creating Users');

        const SALT_COUNT = 10;
        const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

        const { rows: [users] } = await client.query(`
        INSERT INTO users (username, password, email)
        VALUES ($1, $2, $3)
        ON CONFLICT (username) DO NOTHING
        RETURNING username, id, email;
        `, [username, hashedPassword, email])

        return users;
    } catch (error) {
        throw error
    }
}

const getAllUsers = async () => {
    try {
        console.log('Get into the TRY')
        const { rows: users } = await client.query(`
        SELECT *
        FROM users
        `)

        // delete password
        console.log('USER ===>', users)

        const password = users.password;
        if(password) {
            delete password
        }
        console.log('These are our users', users)

        return users
    } catch (error) {
        throw error
    }
}

const getUser = async (username, password, email) => {
    console.log('username ===>', username)
    console.log('password ===>', password)

    try {
        const user = await getUserByUsername(username);
        const hashedPassword = user.password;

        const verifyPassword = await bcrypt.compare(password, hashedPassword);
        console.log('PW', password)
        console.log('HPW', hashedPassword)
        console.log('VPW', verifyPassword)

        if(verifyPassword) {
            delete user.password;
            console.log('User after deleted password', user)

            return user;
        }
    } catch (error) {
        throw error
    }
}



module.exports = {
    createUser,
    getAllUsers,
    getUser,
}