import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "flex-end",
    background: "green"
  }
};
// document.querySelector("nav").style.
function Navbar() {
  return (
    <nav className="navbar" style={styles.navbar}>
      <a href="/">Welcome 2</a>
    </nav>
  );
}

export default Navbar;
