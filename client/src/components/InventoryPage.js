import React from "react";
import NavBar from "./NavBar";
import Inventory from "./Inventory";
import axios from "axios";

class InventoryPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
      }
    }
    componentDidMount() {
      axios
        .get('http://localhost:8000/api/items')
        .then(response => 
          {
            this.setState({items: response.data})
          })
        .catch(err => console.log(err));
    }
    render() {
      return (
        <div className="inventory-page">
          <NavBar></NavBar>
          <Inventory items={this.state.items}></Inventory>
        </div>
      );
    }
  }
  
  export default InventoryPage;
  