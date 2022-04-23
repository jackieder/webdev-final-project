import React from "react";
import postStats from "./postStats";
import {Link} from "react-router-dom";
import forecast from "./forecast";

const NormalItem = ({
                     post = {
                         type: "normal",
                         profilePic: "",
                         userName: "Elon Musk",
                         handle: "elonmusk",
                         time: "23h",
                         postText: "Amazing show about mission!",
                         postPic: "https://cdn.mos.cms.futurecdn.net/z84zZNCTpphuY46UWAsMJj.jpg",
                         picTitle: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                         picSummary: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
                         picLink: "netflix.com",
                         replies: "4.2K",
                         reposts: "3.5K",
                         likes: "37.5K"

                     }
                 }) => {
    return (
        <>
            <li className="list-group-item">
                <div className="row d-flex justify-content-start align-items-center">
                    <div className="col-1 mx-2"><img src={post.profilePic} className="wd-profile-pic" alt="..."/></div>
                    <div className="col-10">
                        <p className="h6 fw-bold text-white">{post.userName}
                            <i className="fa fa-circle-check fa-inverse ps-1"></i> <span className="h6 text-white-50">@{post.handle} - {post.time}</span>
                        </p>
                        <p className="h6">{post.postText}</p>
                    </div>
                    <div className="row d-flex justify-content-end align-items-center ps-4">
                        <div className="col-11">
                            {post.postPic ?
                                <div className="card border-dark">
                                    <div className="card-body override-bs">
                                        <img src={post.postPic} className="card-img-top rounded border-bottom" alt="..."/>
                                        {post.picTitle ? <span className="card-text text-white mx-2">{post.picTitle}</span> : " "}
                                        {post.picSummary ? <p className="card-text text-white-50 mx-2">{post.picSummary}</p> : " "}
                                        {post.picLink ? <span className="card-text text-white-50 mx-2"><i className="fa fa-link"></i>{post.picLink}</span> : " "}
                                    </div>
                                </div>
                                : ' '}
                        </div>
                    </div>
                    {postStats(post.reposts, post.replies, post.likes)}
                </div>
            </li>
        </>
    )
}

const ForecastItem = ({
                        post = {
                            type: "forecast",
                            profilePic: "",
                            userName: "Elon Musk",
                            handle: "elonmusk",
                            time: "23h",
                            postText: "Forecast for the next three days",
                            day1: {
                                date: "04/21/2022",
                                weather: "sunny",
                                temp: "70",
                                note: "Sunny right around 70 degrees"
                            },
                            day2: {
                                date: "04/22/2022",
                                weather: "cloudy",
                                temp: "60",
                                note: "Cloudy early around 60 degrees"
                            },
                            day3: {
                                date: "04/23/2022",
                                weather: "rainy",
                                temp: "50",
                                note: "Rain late"
                            },
                            replies: "4.2K",
                            repost: "3.5K",
                            likes: "37.5K"

                        }
                    }) => {
    return (
        <>
            <li className="list-group-item">
                <div className="row d-flex justify-content-start align-items-center">
                    <div className="col-1 mx-2"><img src={post.profilePic} className="wd-profile-pic" alt="..."/></div>
                    <div className="col-10">
                        <p className="h6 fw-bold text-white">{post.userName}
                            <i className="fa fa-circle-check fa-inverse ps-1"></i> <span className="h6 text-white-50">@{post.handle} - {post.time}</span>
                        </p>
                        <p className="h6">{post.postText}</p>
                    </div>
                    {forecast(post.day1, post.day2, post.day3)}
                    {postStats(post.reposts, post.replies, post.likes)}
                </div>
            </li>
        </>
    )
}

const FeedItem = (post) =>{
    if (String(post.post.type) === "normal") {
        return NormalItem(post.post)
    }
    else {
        return ForecastItem(post.post)
    }

}

export {
    FeedItem
}
