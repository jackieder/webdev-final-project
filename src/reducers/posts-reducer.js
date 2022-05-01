import {
    FIND_ALL_POSTS
} from "../actions/post-actions";

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_POSTS:
            return action.posts;

        default:
            return state;
    }
}

export default postsReducer;