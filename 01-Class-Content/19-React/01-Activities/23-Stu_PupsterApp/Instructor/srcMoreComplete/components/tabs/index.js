import React from "react";
import {Link} from "react-router-dom";

function Tabs(props){
    const path = props.location.pathname;
    return (
        <>
        <ul className="nav nav-tabs">
            
            <li className="nav-item">
                <Link 
                    className={"nav-link " + (path === "/" ? "active" : "")} 
                    to="/">
                    Home</Link>
            </li>
            <li className="nav-item">
                <Link 
                    className={"nav-link " + (path === "/about" ? "active" : "")} 
                    to="/about">
                    About</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link " + (path === "/discover" ? "active" : "")} to="/discover">Discover</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link " + (path === "/search" ? "active" : "")} to="/search">Search</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link " + (path === "/searchadvanced" ? "active" : "")} to="/searchadvanced">Search Advanced</Link>
            </li>
        </ul>
        </>
    )
}

export default Tabs;