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
        `, [username, hashedPassowrd, email])

        return users;
    } catch (error) {
        throw error
    }
}



module.exports = {
    createUser,
}