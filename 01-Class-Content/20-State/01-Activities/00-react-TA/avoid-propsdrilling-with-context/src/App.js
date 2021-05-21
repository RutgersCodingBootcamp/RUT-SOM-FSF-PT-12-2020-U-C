import React from "react";
import "./styles.css";
export const MyContext = React.createContext({});

const Revenant =() =>{
  return(
    <MyContext.Consumer>
        {context => (
            <>
             <div id="sixth">
              <h1>
                 The winner is {context.actor} in Revenant              </h1>  
              </div>
              
            </>
        )}
    </MyContext.Consumer>
  );
}
function OnceUponATimeInHollywood (){
  return(
        <div id="fifth">
          <p> 
          nominated in Once Upon A Time In Hollywood
          </p>

         </div>
              
     
  );
}

function TheWolfOfWallStreet(){
  return(
        <div id="fourth">
          <p> 
          nominated Time in The Wolf Of Wall Street
          </p>
         </div>
              
     
  );
}

function BloodDiamond (){
  return(
        <div id="third">
          <p> 
          nominated in BloodDiamond
          </p>
         </div>
              
     
  );
}

function Aviator (){
  return(
        <div id="second">
          <p> 
          nominated in Aviator
          </p>
         </div>
              
     
  );
}
function WhatsEatingGilbertGrape (){
  return(
        <div id="first">
          <p> 
          nominated in Whats Eating Gilbert Grape movie
          </p>
         </div>
              
     
  );
}

function ListMovies(){
  return (
    <div>
      <h1> The list of Leo movies</h1>
        <WhatsEatingGilbertGrape />
        <Aviator />
        <BloodDiamond />
        <TheWolfOfWallStreet />
        <OnceUponATimeInHollywood />
        <Revenant/>

    </div>

  );
  }


  function Header (){
    return (
      <div className="Header_style">
        <h1>Header </h1>
      </div>
    );
    
  }
  function Footer (){
    return (
      <div className="Footer_style">
        <h1>Footer </h1>
      </div>
    );
    
  }
export default class App extends React.Component {
  state = {
    actor : 'Leonardo DiCaprio',
  }
  render(){
    const {actor} = this.state;
 
  return (
    <>
    <Header />
   <MyContext.Provider value={{actor}}>
   <div className="App">
      <h1>Props Driling</h1>
      <ListMovies  />
    </div>
  </MyContext.Provider>
    <Footer />
    </>
  );
}
}
