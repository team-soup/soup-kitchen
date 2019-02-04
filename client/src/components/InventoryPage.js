import React from "react";
import NavBar from "./NavBar";
import Inventory from "./Inventory";
import axios from "axios";
import {Route} from "react-router-dom";
import AddInventory from "./AddInventory";
import EditInventory from "./EditInventory";

let stock = [
    {
      id: 0,
      name: 'apples',
      quantity: 100,
      unit: 'oz',
      imageUrl: "https://i.imgur.com/pMfBRRt.jpg"
    },
    {
      id: 1,
      name: 'bananas',
      quantity: 200,
      unit: 'oz',
      imageUrl: "https://i.imgur.com/9ny4c0E.jpg"
    },
    {
      id: 2,
      name: 'potatoes',
      quantity: 10,
      unit: 'lb(s)',
      imageUrl: "https://i.imgur.com/dRF2mfc.jpg"
    },
    {
      id: 3,
      name: 'carrots',
      quantity: 13,
      unit: 'lb(s)',
      imageUrl: "https://i.imgur.com/RTZ0qFP.jpg"
    },
    {
      id: 4,
      name: 'eggs',
      quantity: 31,
      unit: 'dozen',
      imageUrl: "https://i.imgur.com/bQYFZjw.jpg"
    },
    {
      id: 5,
      name: 'broccoli',
      quantity: 30,
      unit: 'oz',
      imageUrl: "https://i.imgur.com/47fHnED.jpg"
    },
  ];

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
            this.setState({items: stock}) // TODO: TEMPORARY WHILE AUTH NOT UP
        });
    }
    render() {
      return (
        <div className="inventory-page">
          <NavBar></NavBar>
          <Route exact path="/" render={(props) => <Inventory items={this.state.items} {...props}/>}/>
          <Route path="/add" component={AddInventory}/>
          <Route path="/edit" component={EditInventory}/>
        </div>
      );
    }
  }
  
  export default InventoryPage;
  