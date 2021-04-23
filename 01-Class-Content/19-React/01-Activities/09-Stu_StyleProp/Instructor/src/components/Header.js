import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads
const styles = {
  header: {
    background: "red"
  },
  h1: {
    fontSize: "100px"
  },
  headeron: {
    background: "yellow"
  },
}

function Header() {
  return (
    <header className="header" style={styles.headeron}>
      <h1 style={styles.h1}>Welcome</h1>
    </header>
  );
}

export default Header;
