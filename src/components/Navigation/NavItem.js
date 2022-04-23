import React from "react";
import {Link} from "react-router-dom";

const NavItem = ({
                     link = {
                         linkText:"Home",
                         icon : "fa fa-home fa-inverse",
                         link: "/home"

    }
}) => {
    return (
        <li className="nav-item">
            <Link to={link.link} className="nav-link">{link.linkText}</Link>
        </li>
    )
}

export default NavItem