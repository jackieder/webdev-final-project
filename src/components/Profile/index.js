import React from "react";

const ProfileItem = ({
                         profile = {


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
                <h3>affiliation (if critic) {profile.affiliation}</h3>
                <h3>date joined - location</h3>
            </div>
        </div>
    );
}

export default ProfileItem

