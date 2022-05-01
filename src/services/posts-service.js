import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const POSTS_API = `http://localhost:4000/api/posts`;

export const findAllPosts = async () => {
    const response = await axios.get(POSTS_API);
    const posts = response.data;
    return posts;
}

export const createPost = async (post) => {
    const response = await axios.get(POSTS_API, post);
    return post;
}