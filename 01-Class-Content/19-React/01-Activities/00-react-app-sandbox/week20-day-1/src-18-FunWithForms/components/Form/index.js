import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const password = document.getElementById("password").value;

    console.log(firstName);
    console.log(lastName);
    console.log(password);
    if (!firstName || !lastName) {
      alert("Fill out your first and last name!");
    } else if (password.length < 6 || password.length > 15) {
      alert("Please enter a secure password")
    } else {
      alert(`Hello ${firstName} ${lastName}`)
    }


    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    // alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      firstName: "",
      lastName: "",
      password: ""
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
            id="firstName"
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            id="lastName"
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            id="password"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Please enter a secure password"
          />

          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
