import React, { useState } from "react";
import Home from "./pages/Home";
import ThemeContext from "./components/ThemeContext";
import UserContext from "./components/UserContext";
import AlertContext from "./components/AlertContext";
import ChangeNameButton from "./components/ChangeNameButton";

function App() {

  const [user, setUser] = useState({
    name: "Anthony",
    getUserToken: getUserToken,
    ivansBreadcrumbs: "Knicks",
    setName: (name) => {
      // copy process setState
      setUser({...user, name: name});
      // console.log(name);
      // console.log("did this work");
    }
  })
  
  const [alert, setAlert] = useState({
    display: false,
    theme: "success",
    onClick: (theme, display) => setAlert({...alert, theme, display})
  })

  function getUserToken() {
    return "SampleToken123";
  }

  // Here we are overwriting each Context Object with values from the state of App.js and a string literal.
    return (
      <>
      
      <AlertContext.Provider value={alert}>
        <UserContext.Provider value={user}>
          <ThemeContext.Provider value={"dark"}>
            <ChangeNameButton />
            <Home />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </AlertContext.Provider>
      </>
    );
  }

export default App;
