import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FeedItem} from "./FeedItem";
import {findAllPosts} from "../../actions/post-actions";

const PostFeed = () => {
    const posts = useSelector(
        state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
            findAllPosts(dispatch)
    }
            );

    return (
        <ul className="list-group">
            {
                posts.map && posts.map(post =>
                    <FeedItem key={post._id}
                                  post={post}/>)
            }
        </ul>
    );
}

export default PostFeed