import React from "react";
import {Link} from "react-router-dom";
import FollowingItem from "./FollowingItem";
import people from "../../components/data/following.json"

const FollowingList = () => {
    return (
        <ul className="ps-0">
            {
                people.map(person => {
                    return(<FollowingItem person={person}/>);
                })
            }
        </ul>
    )
}

export default FollowingList