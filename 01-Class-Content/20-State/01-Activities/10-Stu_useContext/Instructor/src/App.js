import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Tiger from "./pages/Tiger";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import WikiContext from "./utils/WikiContext";
import "./App.css";

function App() {
  const [wiki, setWiki] = useState({
    search: "Wikipedia",
    title: "",
    url: "",
    error: ""
  });
  const contextState = {...wiki, setWiki: setWiki};
  document.title = "Wikipedia Searcher";
  return (
    <Router>
      <WikiContext.Provider value={contextState}>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/tiger" component={Tiger} />
          </Wrapper>
          <Footer />
        </div>
      </WikiContext.Provider>
    </Router>
  );
}

export default App;
