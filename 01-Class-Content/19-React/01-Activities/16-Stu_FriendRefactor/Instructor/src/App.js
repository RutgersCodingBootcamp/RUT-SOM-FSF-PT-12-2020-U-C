import React, {Component} from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friends from './friends.json';

class App extends Component {
  state = {
    friends: [...friends]
  }

  handleRemove = id => {
    // console.log(this.state);
    this.setState({
      friends: this.state.friends.filter(friend => friend.id !== id)
    });
  }

  render() {
    return (
      <Wrapper>
        {/* <button onClick={() => this.handleRemove(1)}>Remove Spongebob</button> */}
        <Title>Friends List</Title>
        {/* {this.state.friends is the stateful version of your friends array} */}
        {this.state.friends.map( friend => (
          <FriendCard
            key={friend.id}
            handleRemove={this.handleRemove}
            {...friend}
          />
        ))}
        {
            // {...friend} -> spread operator simplfies your props declarations below
            // id={friend.id}
            // name={friend.name}
            // image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
        }
        {
          // state has to be initialized
          // state needs to be used on the component
          // state needs to change based on... user interaction... we need an event handler
        }
      </Wrapper>
    );
  }
}

export default App;
