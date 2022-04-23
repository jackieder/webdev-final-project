import React from "react";
import {Link} from "react-router-dom";
import {FeedItem} from "./FeedItem";
import posts from "./posts.json"

const HomeFeed = () => {
    return (
        <ul className="ps-0">
            {
                posts.map(post => {
                    return(<FeedItem post={post}/>);
                })
            }
        </ul>
    )
}

export default HomeFeed