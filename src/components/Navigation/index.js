import React from "react";
import NavItem from "./NavItem"
import {Link} from "react-router-dom";
import links from "./links.json"

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto">
                    <Link to="/home" className="navbar-brand">BoxOffice</Link>
                    {
                        links.map(link => {
                            return(<NavItem link={link}/>);
                        })
                    }
                </ul>

            </div>
        </nav>

    )
}

export default NavigationBar