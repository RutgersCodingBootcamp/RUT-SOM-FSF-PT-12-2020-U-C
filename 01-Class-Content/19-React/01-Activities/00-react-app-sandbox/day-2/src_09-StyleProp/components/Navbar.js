import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads
const styles = {
  navbar: {
    display: "flex",
    background: "green",
    justifyContent: "flex-end"
  }
}
function Navbar() {
  return (
    <nav className="navbar" style={styles.navbar}>
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
