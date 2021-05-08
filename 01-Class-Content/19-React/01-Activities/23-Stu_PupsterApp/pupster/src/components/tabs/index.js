import React from "react";
import { Link } from "react-router-dom";

function Tabs(props) {
    const path = props.location.pathname;
    return (
        <>

            <ul className="nav nav-tabs">
            <li className="nav-item">
                    <Link
                        className={"nav-link " + (path === "/" ? "active" : "")}
                        aria-current="page"
                        to={"/home"}>
                        Home</Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={"nav-link " + (path === "/about" ? "active" : "")}
                        aria-current="page"
                        to={"/about"}>
                        About</Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={"nav-link " + (path === "/discover" ? "active" : "")}
                        to={"/discover"}>
                        Discover</Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={"nav-link " + (path === "/search" ? "active" : "")}
                        to={"/search"}>
                        Search</Link>
                </li>
            </ul>
        </>
    )
}

export default Tabs;