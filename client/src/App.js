import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import Inventory from "./components/Inventory";
import './App.css';
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:3333/items')
      .then(response => 
        {
          this.setState({items: response.data})
        })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Inventory items={this.state.items}></Inventory>
      </div>
    );
  }
}

export default App;
