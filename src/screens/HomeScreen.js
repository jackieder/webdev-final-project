import React from "react";
import {combineReducers, createStore} from "redux";
import NavigationBar from "./../components/Navigation"
import PostFeed from "../components/Feed";
import HomeForecast from "../components/Forecast";
import FollowingList from "./../components/Following/FollowingList";
import FollowerList from "./../components/Following/FollowerList";
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
                <HomeForecast/>
                <div className="container-fluid">
                    <div className="col-8">
                        <PostFeed/>
                    </div>
                    <FollowingList/>
                    <FollowerList/>
                </div>
        </Provider>

    );
}
export default HomeScreen;