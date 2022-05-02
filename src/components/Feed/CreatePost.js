import React,  {useState} from 'react';

import {useProfile} from "../../contexts/profile-context";
import {createPost} from "../../services/posts-service";

const CreatePost = (movieId) => {
    const {profile} = useProfile()
   const [newPost, setNewPost] = useState('New post');

    return (
        <div>
            <label className="form-label mt-4">Post</label>
            <textarea className="form-control" placeholder="Create a Post" rows="3" value={newPost.textContent}
            onChange={(event) =>
            setNewPost( event.target.value)} />
            <button type="button" className="btn btn-primary float-end" onClick={() => {
                createPost(profile._id, newPost, movieId.movieId)
                setNewPost("")}}>Post</button>
        </div>
    )
}

export default CreatePost