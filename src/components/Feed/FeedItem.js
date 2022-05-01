import React from 'react';

const FeedItem = ({
                     post = {

                     },
                      user = {

    }
                 } ) => {

    const postDate = new Date(post.datePosted);
    const year = postDate.getFullYear();
    const month = postDate.getMonth();
    const day = postDate.getDay();
    return (
        <>
            <li className="list-group-item list-group-item-action flex-column align-items-start active">
                <div className="d-flex w-100 justify-content-between">
                    <h3 className="mb-1">{post.text}</h3>
                    <small>{month + "-" + day + "-" + year}</small>
                </div>
                <small>posted by: {post.user}</small>

            </li>
        </>
    )
}


export {FeedItem};
