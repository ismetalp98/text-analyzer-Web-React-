import React, { Component } from "react";
import logo from "./../logo.svg";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo" src={logo} alt="logo" width="100%" />
      </div>
    );
  }
}
module.exports = Header;
