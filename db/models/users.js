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
    
}



module.exports = {
    createUser,
    getAllUsers,
}