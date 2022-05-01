import * as service from '../services/posts-service';

export const FIND_ALL_POSTS = 'FIND_ALL_POSTS';
export const CREATE_POST = 'CREATE_POST';

export const createPost = async (dispatch, post) => {
    const newPost = await service.createPost(post);
    dispatch({
        type: CREATE_POST,
        newPost
    });
}

export const findAllPosts = async (dispatch) => {
    const posts = await service.findAllPosts();
    dispatch({
        type: FIND_ALL_POSTS,
        posts
    });
}
