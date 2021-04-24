import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import SpongeBobCard from "./components/SpongeBobCard";
// import SquidwardCard from "./components/SquidwardCard";
// import MrKrabsCard from "./components/MrKrabsCard";
import CharacterCard from "./components/CharacterCard"; 
// index.js is implied because "index.js" is the default js file for a folder
import characters from "./characters.json";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>

      {/* <SpongeBobCard />
      <MrKrabsCard />
      <SquidwardCard /> */}
      
      {characters.map( ({id, image, name, occupation, location}) => (
        <CharacterCard 
          key={id}
          image={image}
          name={name}
          occupation={occupation}
          location={location}
        />
      ))}
    </Wrapper>
  );
}

export default App;
