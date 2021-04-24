import React from "react";

class CounterAdvanced extends React.Component {
  state = {
    count: 0
  };

  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };
  // handleDecrement = () => {
  //   this.setState({ count: this.state.count - 1 });
  // };
  handleChange = (event) =>{
    // console.log(event.target.textContent === "Increment");
    this.setState({ count: this.state.count + ( event.target.textContent === "Increment" ? 1 : -1 ) });
  };

  handleAnotherThing = (event) => {
    this.setState({ count: 4 });
  }



  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleChange}>
            Increment
          </button>
          <br />
          <br />
          
          <button className="btn btn-secondary" onClick={this.handleChange}>
            Decrement
          </button>

          <br />
          <br />
          <button className="btn btn-secondary" onClick={this.handleAnotherThing}>
            Another button
          </button>
        </div>
      </div>
    );
  }
}

export default CounterAdvanced;
