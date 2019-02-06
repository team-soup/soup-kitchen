import React from "react";
import crockpot from "../img/crockpot_logo.png"
import {NavLink} from "react-router-dom";

const NavBar = props => {
    return (
        <header>
            <div className="nav-wrap">
                <img alt="crockpot" className="logo" src={crockpot}/>
                <div className="header-text">
                    <h1>Soup Kitchen</h1>
                    <h2>Admin Panel</h2>
                    </div>
                <nav>
                    <NavLink className="decor" activeClassName="selected-nav" exact to="/">View Inventory</NavLink>
                    <NavLink className="decor" activeClassName="selected-nav" exact to="/add">Add Inventory</NavLink>
                    <a href="/" className="nodecoration"><button className="logout" onClick={props.logOut}>Log Out</button></a>
                    {/* <NavLink to="/edit">Edit Inventory</NavLink> */}
                </nav>
            </div>
        </header>
    )
}

export default NavBar;