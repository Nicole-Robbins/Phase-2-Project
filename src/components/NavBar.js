import React from "react";
import {NavLink} from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <NavLink exact to="/home">Home</NavLink>
            <NavLink exact to="/villagers">Villagers</NavLink>
            <NavLink exact to="/nooks">Nooks</NavLink>
            <NavLink exact to="/inventory">Inventory</NavLink>
        </nav>
    )
}

export default NavBar;