import React, { Component } from "react";

export class Settings extends Component {
  state = {
    user: {
      image: "",
      bio: "",
      email: "",
      username: "",
      password: ""
    }
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      user: {
        [name]: value
      }
    });
  };

  render() {
    return (
      <div>
        <h1>settings</h1>
      </div>
    );
  }
}

export default Settings;
