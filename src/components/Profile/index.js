import React from "react";

const ProfileItem = ({
                         user = {


                         }
                     }) => {
    return (
        <div className="row">
            <div className="col-9">
                <h2>{user.firstName}</h2>
                <h3>{user.email}</h3>
                {user.userType==="critic" ? <h3>Critic</h3> : <h3>User</h3> }
            </div>
        </div>
    );
}

export default ProfileItem

