import React from "react";
import crockpot from "../img/crockpot_logo.png"

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
                    <a href="#">Add Inventory</a>
                    <a href="#">Edit Existing Inventory</a>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;