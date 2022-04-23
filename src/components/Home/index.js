import React from "react";
import {Link} from "react-router-dom";
import NavigationBar from "./../Navigation"
import HomeFeed from "./HomeFeed";

const HomeScreen = () => {
    return (
        <>
            <NavigationBar/>
            <HomeFeed/>
        </>
    );
}
export default HomeScreen;
