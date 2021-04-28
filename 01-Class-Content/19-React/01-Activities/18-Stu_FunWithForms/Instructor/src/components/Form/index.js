import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    //     * Set the initial value of `this.state.password` to an empty string.
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;
    // console.log("When is this running???????")
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  handlePasswordChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    
    // make sure the password is only 15 letters long
    // if(value.length > 15){
    //   value = value.substr(0, 15);
    // }
    // condition ? trueValue : falseValue;
    value = value.length > 15 ? value.substr(0, 15) : value;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    let [firstName, lastName, password] = Object.keys(this.state)
    .map( name => document.querySelector("[name=" + name + "]").value);

    //  2. Whenever a user clicks the "Submit" button, add code to accomplish the following:
    // "" === falsy 
    // !"" === truthy -- we want to see an alert when this is true
    if( !firstName || !lastName){
    //     1. If the user hasn't provided a first and last name, throw an alert saying: "Fill out your first and last name please!".
      alert("Please fill out your first and last name please!")   
    }
    //     2. If the user has provided a first and last name, but their password is less than 6 characters, throw an alert saying, "Choose a more secure password," followed by the full name. E.g. "Choose a more secure password, John Smith!"
    else if( password.length < 6){
      alert(`Please choose a more secure password (6 letters or more), ${firstName} ${lastName}!`);
    }
      //     3. Else, throw an alert to greet the user. E.g. "Hello, John Smith!".
    
    
    //  3. Do not allow the user to type in a password that is longer than 15 characters. i.e. the length of the password state should never go beyond 15 characters.

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    else{
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }
    this.setState({
      firstName: "",
      lastName: ""
    });
  };



  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handlePasswordChange}
            type="password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
