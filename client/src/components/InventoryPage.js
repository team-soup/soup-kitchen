import React from "react";
import NavBar from "./NavBar";
import Inventory from "./Inventory";
import axios from "axios";
import {Route} from "react-router-dom";
import AddInventory from "./AddInventory";
import EditInventory from "./EditInventory";

class InventoryPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
      }
    }
    componentDidMount() {
      axios
        .get('http://localhost:3333/items') // TODO: TEMP SERVER
        .then(response => 
          {
            this.setState({items: response.data})
          })
        .catch(err => {
            console.log(err)
        });
    }
    handleAdd = e => {
        addObj = {
            name : e.target[0].value,
            quantity : e.target[1].value,
            unit : e.target[2].value,
        }
        axios
        .post('http://localhost:3333/items',addObj)
        .then(response => this.setState({items: response.data}))
        .catch(err => {
            console.log(err)
        })
    }
    handleEdit = e => {
        id = e.target[0].value;
        editObj = {
            name : e.target[1].value,
            quantity : e.target[2].value,
            unit : e.target[3].value,
        }
        axios
        .put(`http://localhost:3333/items/${id}`,editObj)
        .then(response => this.setState({items: response.data}))
        .catch(err => {
            console.log(err)
        })
    }
    render() {
      return (
        <div className="inventory-page">
          <NavBar></NavBar>
          <Route exact path="/" render={(props) => <Inventory items={this.state.items} {...props}/>}/>
          <Route path="/add" render={(props) => <AddInventory handleAdd={this.handleAdd} {...props}/>}/>
          <Route path="/edit" render={(props) => <EditInventory handleEdit={this.handleEdit} {...props}/>}/>
        </div>
      );
    }
  }
  
  export default InventoryPage;
  