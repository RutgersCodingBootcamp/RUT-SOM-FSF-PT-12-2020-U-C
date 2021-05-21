import React from "react";
import "./styles.css";

const Revenant = props =>{
  return(
        <div id="sixth">
            <h1> 
            The winner is {props.passData.actor} in Revenant
            </h1>
                  
         </div>
              
     
  );
}
const OnceUponATimeInHollywood = props =>{
  return(
        <div id="fifth">
          <p> 
          nominated in Once Upon A Time In Hollywood
          </p>
          <Revenant passData={props.passData} />

         </div>
              
     
  );
}

const TheWolfOfWallStreet = props =>{
  return(
        <div id="fourth">
          <p> 
          nominated Time in The Wolf Of Wall Street
          </p>
          <OnceUponATimeInHollywood passData={props.passData} />

         </div>
              
     
  );
}

const BloodDiamond = props =>{
  return(
        <div id="third">
          <p> 
          nominated in BloodDiamond
          </p>
          <TheWolfOfWallStreet passData={props.passData} />

         </div>
              
     
  );
}

const Aviator = props =>{
  return(
        <div id="second">
          <p> 
          nominated in Aviator
          </p>
          <BloodDiamond passData={props.passData} />

         </div>
              
     
  );
}
const WhatsEatingGilbertGrape = props =>{
  return(
        <div id="first">
          <p> 
          nominated in Whats Eating Gilbert Grape movie {props.passData.actress}
          </p>
          <Aviator passData={props.passData} />

         </div>
              
     
  );
}



const ListMovies = props =>{
  return (
    <div>
      <h1 style={{marginTop:'60px'}}> The list of Leo movies</h1>
        <WhatsEatingGilbertGrape 
          passData={props.passData} />
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
    actor : 'Bob Smith',
    actress: 'Angelina Jolie'
  }
  render(){
  return (
    <>
    <Header />
   <div className="App">
      <ListMovies passData={this.state}  />
    </div>
    <Footer />
    </>
  );
}
}
