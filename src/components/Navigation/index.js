import React from "react";
import NavItem from "./NavItem"
import {Link} from "react-router-dom";
import links from "./links.json"

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto">
                    <Link to="/home" className="navbar-brand">Climalingo</Link>
                    {
                        links.map(link => {
                            return(<NavItem link={link}/>);
                        })
                    }
                </ul>
                <form className="d-flex">
                    <input className="form-control me-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}

export default NavigationBar