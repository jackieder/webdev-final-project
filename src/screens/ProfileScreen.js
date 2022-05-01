import React, {useEffect, useState} from 'react';
import {combineReducers, createStore} from "redux";
import * as service from "../services/authorization-service"
import NavigationBar from "./../components/Navigation"
import {Link, useNavigate} from "react-router-dom";
import {useProfile} from "../contexts/profile-context";
import postsReducer from "../reducers/posts-reducer";

const reducer = combineReducers({
    posts: postsReducer,
});
const store = createStore(reducer);


const ProfileScreen = () => {
    const {profile} = useProfile()
    const navigate = useNavigate()
    const logout = async () => {
        await service.logout()
        navigate('/home')
    }
    return (
        <>
                <NavigationBar/>
                <div>
                    <h1>Profile</h1>
                    <hr/>
                    <div className={"row justify-content-between"}>
                        <div className={"col"}>
                            Email
                        </div>
                        <div className={"col"}>
                            {profile.email}
                        </div>
                    </div>
                    <div className={"row justify-content-between"}>
                        <div className={"col"}>
                            Password
                        </div>
                        <div className={"col"}>
                            *******
                        </div>
                    </div>
                    <div className={"row justify-content-between"}>
                        <div className={"col"}>
                            User Type
                        </div>
                        <div className={"col"}>
                            {profile.userType}
                        </div>
                    </div>

                </div>
                <Link to={"/editProfile"}>
                    <button className="btn m-4"
                    >Edit Profile
                    </button>
                </Link>
                <button className="btn btn-danger m-4"
                        onClick={logout}>Logout
                </button>

        </>
);
}


export
    {
        ProfileScreen
    }
;
