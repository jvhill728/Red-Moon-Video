const baseURL = '/api';

export const getAllUsers = async () => {
    try {
        let response = await fetch(`${baseURL}/users`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const returnedUsers = await response.json()
        return returnedUsers;
    } catch(error) {
        console.log("Error getting all users")
        throw error;
    }
}

const 