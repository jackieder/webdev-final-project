import React from "react";

const postStats = (reposts, replies, likes) => {
    return (
        <div className="row d-flex justify-content-end align-items-center ps-4">
            <div className="col my-3 ps-5">
                <span className="text-white-50"><i
                    className="fa fa-comment"></i> {replies ? replies : ""}</span>
            </div>
            <div className="col my-3 px-0">
                <span className="text-white-50"><i
                    className="fa fa-retweet"></i> {reposts ? reposts : ""}</span>
            </div>
            <div className="col my-3 px-0">
                <span className="text-white-50"><i className="fa fa-heart"></i> {likes ? likes : ""}</span>
            </div>
            <div className="col my-3 px-0">
                <span className="text-white-50"><i className="fa fa-arrow-up-from-bracket"></i></span>
            </div>
        </div>
    )
}

export default postStats