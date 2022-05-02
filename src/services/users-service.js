import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const USERS_API = `http://localhost:4000/api/users`;


export const findUser = async (userId) => {
    const response = await axios.get(`${USERS_API}/${userId}`);
    const user = response.data;
    return user;
}

export const updateUser = async (userId, email, password) => {
    var data = {}
    if(email !== "") {
        data["email"] = email
    }
    if(password !== "") {
        data["password"] = password
    }
    const response = await axios.put(`${USERS_API}/${userId}`,data);
    const user = response.data;
    return data;
}

