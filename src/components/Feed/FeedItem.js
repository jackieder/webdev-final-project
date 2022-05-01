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
            <li className="list-group-item">
                <h6>{post.textContent}</h6>
                <h6>{month + "-" + day + "-" + year}</h6>
                <h6>{post.user}</h6>
            </li>
        </>
    )
}


export {FeedItem};
