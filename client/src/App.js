import React, { Component } from 'react';
import InventoryPage from "./components/InventoryPage";
import './App.css';
import Login from "./components/Login";
import Authenticate from "./components/Authenticate";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <InventoryPage/>
      </div>
    );
  }
}

export default Authenticate(App)(Login);
