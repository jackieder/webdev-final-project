import React from "react";
import {Link} from "react-router-dom";
import FollowerItem from "./FollowerItem";
import people from "../../components/data/following.json"

const FollowerList = () => {
    return (
        <ul className="ps-0">
            {
                people.map(person => {
                    return(<FollowerItem person={person}/>);
                })
            }
        </ul>
    )
}

export default FollowerList