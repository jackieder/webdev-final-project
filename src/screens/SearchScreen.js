import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import NavigationBar from "./../components/Navigation"
import {Link, useNavigate, useParams} from "react-router-dom";


const SearchScreen = () => {
    const [movies, setMovies] = useState([])
    const searchRef = useRef()
    const {movieSearch} = useParams()
    const searchURL = 'https://www.omdbapi.com/?apikey=840eec6b'
    const navigate = useNavigate()
    const searchMovies = async () => {
        const searchTerm = searchRef.current.value || movieSearch || 'batman'
        const response = await axios.get(`${searchURL}&s=${searchTerm}`)
        setMovies(response.data.Search)
        searchRef.current.value = searchTerm
        navigate(`/search/${searchTerm}`)
    }
    useEffect(() => {
        searchMovies()
    }, [])
    return (
        <>
            <NavigationBar/>


                <ul className="list-group">
                    <li className="list-group-item">
                        <input className="form-control me-sm-2" ref={searchRef} type="text" placeholder="Search"/>
                        <button onClick={searchMovies} className="btn btn-secondary my-2 my-sm-0 float-end"  type="submit">Search</button>
                    </li>
                    {
                        movies.map(movie =>
                            <li className="list-group-item">
                                <Link to={`/details/${movie.imdbID}`}>
                                    <img src={movie.Poster} className="me-2" height={30}/>
                                    {movie.Title}
                                </Link>
                            </li>
                        )
                    }

                </ul>


        </>

        );

}

export default SearchScreen