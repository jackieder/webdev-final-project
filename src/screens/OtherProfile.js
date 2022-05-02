import React, {useEffect, useState} from 'react';
import ProfileItem from "../components/Profile";
import {useNavigate, useParams} from "react-router-dom";
import {findUser} from "../services/users-service";
import Navigation from "../components/Navigation";
import {findReviewsByUser} from "../services/posts-service";

const OtherProfile = () => {
    const [user, setUser] = useState([])
    const [reviews, setReviews] = useState([])
    const params = useParams()
    const userId = params.userId
    const getProfile = async () => {
        const response = await findUser(userId)
        setUser(response)
    }
    const getReviewsByUser = async () => {
        const response = await findReviewsByUser(userId)
        setReviews(response.data)
    }
    useEffect(() => {
        getProfile()
        getReviewsByUser()
    }, [])
    return (
        <>
            <Navigation />
                <div>
                    <h1>Profile</h1>
                </div>
                <ProfileItem key={user._id}
                                user={user}/>
            <ul>
            {
                reviews && reviews.map(review => <li className="list-group-item list-group-item-action flex-column align-items-start active">
                        <div className="d-flex w-100 justify-content-between">
                            <h3 className="mb-1">{review.text}</h3>
                            Upvotes: {review.upvote}
                        </div>

                    </li>


                )
            }
            </ul>
        </>
    );
}


export default OtherProfile