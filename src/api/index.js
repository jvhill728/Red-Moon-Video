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

export const registerNewUser = async (userObject) => {

    console.log("UserObject", userObject)
    const response = await fetch(`${baseUrl}/users/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: userObject.username,
            password: userObject.password
        }),
    });
    const json = await response.json()
    const user = json.user

    console.log('JSON', json)
    console.log('USER==>', user)
    console.log('userObject', userObject)

    localStorage.setItem('UserToken', json.token);
    localStorage.setItem('Username', user.username);
    localStorage.setItem('userId', user.id);

    return json;
}

export const loginUser = async (userObject) => {
    console.log('userObject ==>', userObject)
    const response = await fetch(`${baseUrl}/users/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: userObject.username,
            password: userObject.password
        }),
    });

    const json = await response.json();
    const user = json.user

    if(!user) {
        return false
    } else {
        localStorage.setItem('userToken', json.token);
        localStorage.setItem('Username', user.username);
        localStorage.setItem('userId', user.Id);
    }
    return user;
}