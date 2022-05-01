import React from "react";
import {Link} from "react-router-dom";
import NavigationBar from "./../components/Navigation"
import ProfileItem from "../components/Profile";

const ProfileScreen = () => {
    return (
        <>
            <NavigationBar/>
            <ProfileItem/>

        </>
    );
}
export default ProfileScreen;