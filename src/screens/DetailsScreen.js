import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import NavigationBar from "./../components/Navigation";
import {Link, useNavigate, useParams} from "react-router-dom";
import {findPosts} from "../services/posts-service";
import {useDispatch, useSelector} from "react-redux";
import {useProfile} from "../contexts/profile-context";
import CreatePost from "../components/Feed/CreatePost";
import {findUser} from "../services/users-service";


const DetailsScreen = () => {
    const {profile} = useProfile()
    const [movie, setMovie] = useState([])
    const params = useParams()
    const imdbID = params.imdbID
    const searchURL = 'https://www.omdbapi.com/?apikey=840eec6b'
    const [reviews, setReviews] = useState([])
    const getDetails = async () => {
        const response = await axios.get(`${searchURL}&i=${imdbID}`)
        setMovie(response.data)
    }
    const getReviews = async () => {
        const response = await findPosts(imdbID)
        console.log("gettingrevuews", response)
        setReviews(response)
    }
    const getUser = async (id) => {
        const response = await findUser(id)
        const email = response.email
        return email
    }
    useEffect(() => {
    getDetails()
        getReviews()}, [])
    return (
        <>
            <NavigationBar />
            {movie && (
                <div>
                    <h1>{movie.Title}</h1>
                    <img src={movie.Poster}/>
                    <h1>Director {movie.Director}</h1>
                    <h1>Metascore: {movie.Metascore}</h1>
                    <h1>Box Office Earnings: {movie.BoxOffice}</h1>
                </div>
            )}
            <ul>
                {profile && <CreatePost movieId={movie.imdbID}/>}
            </ul>
            <ul>
                {
                    reviews && reviews.map(review => <li className="list-group-item list-group-item-action flex-column align-items-start active">
                            <div className="d-flex w-100 justify-content-between">
                                <h3 className="mb-1">{review.text}</h3>
                            </div>
                            <small>posted by: {review.email}</small>

                        </li>


                    )
                }
            </ul>

        </>

    )
}

export default DetailsScreen