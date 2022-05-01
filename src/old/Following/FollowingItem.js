import React from "react";
import {Link} from "react-router-dom";

const FollowingItem =  ({
                               person = {
                                   profilePic: "spongebob",
                                   firstName: "Spongebob",
                                   handle: "spongebob",
                                   affiliation: "BKNITV",
                                   userType: "meteorologist"

                               }
                           }) => {
    return (
        <li className="list-group-item">
            <h6>{person.profilePic}</h6>
            <h6>{person.firstName}</h6>
            <h6>{person.handle}</h6>
            <h6>{person.affiliation}</h6>
            <h6>{person.userType}</h6>
        </li>
    )
}

export default FollowingItem