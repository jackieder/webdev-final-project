import React,  {useState} from 'react';
import {useDispatch} from "react-redux";
import {createPost}
    from "../../actions/post-actions";

const CreatePost = () => {
   const dispatch = useDispatch();
   const [newPost, setNewPost] = useState({text: 'New post'});

    return (
        <div className="form-group">
            <label className="form-label mt-4">Post</label>
            <textarea className="form-control" placeholder="Create a Post" rows="3" value={newPost.textContent}
            onChange={(event) =>
            setNewPost({...newPost, text: event.target.value})}></textarea>
            <input type="text" placeholder="Movie"onChange={(event) =>
                setNewPost({...newPost, movie: event.target.value})}/>
            <button type="button" className="btn btn-primary float-end" onClick={() => createPost(dispatch, newPost)}>Post</button>
        </div>
    )
}

export default CreatePost