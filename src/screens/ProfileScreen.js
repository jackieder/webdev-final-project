import React, {useEffect, useState} from 'react';
import {combineReducers, createStore} from "redux";
import * as service from "../services/authorization-service"
import NavigationBar from "./../components/Navigation"
import {Link, useNavigate} from "react-router-dom";
import {useProfile} from "../contexts/profile-context";
import postsReducer from "../reducers/posts-reducer";
import {findReviewsByUser} from "../services/posts-service";

const reducer = combineReducers({
    posts: postsReducer,
});
const store = createStore(reducer);


const ProfileScreen = () => {
    const {profile} = useProfile()
    const [reviews, setReviews] = useState([])
    const navigate = useNavigate()
    const logout = async () => {
        await service.logout()
        navigate('/home')
    }
    const getReviewsByUser = async () => {
        const response = await findReviewsByUser(profile._id)
        setReviews(response.data)
    }
    useEffect(() => {
        getReviewsByUser()
    }, [])
    return (
        profile &&
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

            <h1>Your Reviews</h1>
            {
                reviews && reviews.map(review => <li className="list-group-item list-group-item-action flex-column align-items-start active">
                        <div className="d-flex w-100 justify-content-between">
                            <h3 className="mb-1">{review.text}</h3>
                            Upvotes: {review.upvote}
                        </div>

                    </li>


                )
            }

        </> || <><h1>Hello!</h1>
            <h3>You are not logged in!</h3>
            <br/>
            <br/>
            <div className={"btn m-4"}>
            <a href="/signin">Login</a>
        </div>
    <div className={"btn"}>
        <a href="/register">Register</a>
    </div>
        </>
);
}


export
    {
        ProfileScreen
    }
;
