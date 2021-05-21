import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends React.Component {
  state = {
    friends,
  };

  removeFriend = (id) => {
    const friends = this.state.friends.filter((friend) => friend.id !== id);
    this.setState({ friends });
  };
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(({id, name, image, occupation, location}) => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={id}
            key={id}
            name={name}
            image={image}
            occupation={occupation}
            location={location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
