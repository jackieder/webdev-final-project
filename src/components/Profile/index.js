import React from "react";
import profile from "../data/following.json"
const ProfileItem = ({
                         profile = {
                             profilePic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
                             firstName: "Spongebob",
                             handle: "spongebob",
                             affiliation: "BKNITV",
                             userType: "meteorologist"

                         }
                     }) => {
    return (
        <div className="row">
            <div className="col-3">
                <img src={profile.profilePic}/>
            </div>
            <div className="col-9">
                <h2>{profile.firstName}</h2>
                <h3>{profile.handle}</h3>
                <h3>affiliation (if meteorologist) {profile.affiliation}</h3>
                <h3>date joined - location</h3>
            </div>
        </div>
    );
}

export default ProfileItem

