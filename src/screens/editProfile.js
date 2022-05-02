import React, {useEffect, useState, useRef} from 'react';
import {combineReducers, createStore} from "redux";
import * as service from "../services/authorization-service"
import NavigationBar from "./../components/Navigation"
import ProfileItem from "../components/Profile";
import PostFeed from "../components/Feed";
import {Link, useNavigate} from "react-router-dom";
import {useProfile} from "../contexts/profile-context";
import postsReducer from "../reducers/posts-reducer";
import {Provider} from "react-redux";
import {updateUser} from "../services/users-service";
import {signin} from "../services/authorization-service";

const reducer = combineReducers({
    posts: postsReducer,
});
const store = createStore(reducer);


const EditProfile = () => {
    const {profile, editProfile} = useProfile()
    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const userTypeRef = useRef
    const logout = async () => {
        await service.logout()
        navigate('/home')
    }
    useEffect(() => {
        // getProfile()
    }, [])
    const submitEdit = async () => {
        try {
            await editProfile(
                profile._id,
                emailRef.current.value,
                passwordRef.current.value
            )
            navigate("/profile")
        } catch (e) {
            alert('Error Updating Profile')
        }
    }
    return (
        <>
            <Provider store={store}>
                <NavigationBar/>
                <div>
                    <input ref={emailRef} placeholder={profile.email} className="form-control" type="email"/>
                    <input ref={passwordRef} placeholder="***" className="form-control" type="password"/>
                <button onClick={submitEdit}>Submit</button>
                </div>
            </Provider>

        </>
    );
}


export
{
    EditProfile
}
    ;