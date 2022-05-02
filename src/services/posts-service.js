import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const POSTS_API = `http://localhost:4000/api/posts`;

export const findAllPosts = async () => {
    const response = await axios.get(POSTS_API);
    const posts = response.data;
    return posts;
}

export const findPosts = async (movie) => {
    const response = await axios.get(`${POSTS_API}/${movie}`);
    const posts = response.data;
    return posts;
}

export const createPost = async (userId, post, movieId) => {

    const data = {
        "userId": userId,
        "body": {
            "text": post,
            "movieId": movieId
        }
    }
    const response = await axios.post(POSTS_API, data);
    return response;
}
export const updatePost = async (post) => {
    const response = await axios
        .put(`${POSTS_API}/${post._id}`, post);
    return response;
}
export const deletePost = async (post) => {
    const response = await axios
        .delete(`${POSTS_API}/${post._id}`);
    return response;
}

export const findReviewsByUser = async (userId) => {
    const response = await axios.get(`${POSTS_API}/&user=${userId}`)
    return response;
}