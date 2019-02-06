import React, { Component } from 'react';
import InventoryPage from "./components/InventoryPages/InventoryPage";
import './App.css';
import Login from "./components/Login/Login";
import Authenticate from "./components/Login/Authenticate";

class App extends Component {
  render() {
    return (
      <div className="App">
        <InventoryPage/>
      </div>
    );
  }
}

export default Authenticate(App)(Login);
