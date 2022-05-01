import React, {useEffect, useState} from 'react';
import {combineReducers, createStore} from "redux";
import * as service from "../services/authorization-service"
import NavigationBar from "./../components/Navigation"
import ProfileItem from "../components/Profile";
import PostFeed from "../components/Feed";
import {Link, useNavigate} from "react-router-dom";
import {useProfile} from "../contexts/profile-context";
import postsReducer from "../reducers/posts-reducer";
import {Provider} from "react-redux";

const reducer = combineReducers({
    posts: postsReducer,
});
const store = createStore(reducer);

const ProfileLoggedIn = () => {
    const {profile} = useProfile()
    const navigate = useNavigate()
    const logout = async () => {
        await service.logout()
        navigate('/home')
    }
    useEffect(() => {
        // getProfile()
    }, [])
    return (
        <>
            <NavigationBar/>
            <ProfileItem/>
            <div>
                <h1>Profile</h1>
                <button className="btn btn-danger"
                        onClick={logout}>Logout
                </button>
                <hr/>
                {profile && profile.email}
            </div>

        </>
    );
}

const ProfileScreen = () => {
    const {profile} = useProfile()
    const navigate = useNavigate()
    const logout = async () => {
        await service.logout()
        navigate('/home')
    }
    useEffect(() => {
        // getProfile()
    }, [])
    return (
        <>
            <Provider store={store}>
                <NavigationBar/>
                <div>
                    <h1>Profile</h1>
                    <button className="btn btn-danger"
                            onClick={logout}>Logout
                    </button>
                    <hr/>
                    {profile && profile.email}
                </div>
                <ProfileItem/>
                <PostFeed/>

            </Provider>

        </>
    );
}


export {ProfileLoggedIn, ProfileScreen};
