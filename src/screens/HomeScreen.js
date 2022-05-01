import React from "react";
import {combineReducers, createStore} from "redux";
import NavigationBar from "./../components/Navigation"
import PostFeed from "../components/Feed";
import CreatePost from "../components/Feed/CreatePost";
import postsReducer from "../reducers/posts-reducer";
import {Provider} from "react-redux";
const reducer = combineReducers({
        posts: postsReducer,
    });
const store = createStore(reducer);


const HomeScreen = () => {
    return (
        <Provider store={store}>
                <NavigationBar/>
                <div className="container-fluid">
                    <div className="col-8">
                        <CreatePost/>
                        <PostFeed/>
                    </div>

                </div>
        </Provider>

    );
}
export default HomeScreen;