import React from "react";
import NavBar from "./NavBar";
import Inventory from "./Inventory";
import axios from "axios";
import {Route} from "react-router-dom";
import AddInventory from "./AddInventory";
import Item from "./Item";
import ItemEditForm from "./ItemEditForm";

class InventoryPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        token: null,
      }
    }
    componentDidMount() {
        if (localStorage.getItem("token")) {
            this.setState({loggedIn: true});
            this.setState({token:localStorage.getItem("token")});
        }
        let options = { 
            headers: {
                Authorization: localStorage.getItem("token"),
            }}
        axios
        .get('https://soup-kitchen-backend.herokuapp.com/api/items', options)
        .then(response => 
        {
            console.log(response.data);
            this.setState({items: response.data.items})
        })
        .catch(err => {
            console.log(err)
        });
    }
    handleAdd = e => {
        e.preventDefault();
        let addObj = {
            name : e.target[0].value,
            amount : e.target[1].value,
            unit : e.target[2].value,
            imageUrl : e.target[3].value,
            categoryID : e.target[4].value,
        }
        console.log(addObj)
        let options = { 
            headers: {
                Authorization: localStorage.getItem("token"),
            }}
        axios
        .post('https://soup-kitchen-backend.herokuapp.com/api/items',addObj,options)
        .then(response => {
            let options = { 
                headers: {
                    Authorization: localStorage.getItem("token"),
                }}
            axios
            .get('https://soup-kitchen-backend.herokuapp.com/api/items', options)
            .then(response => 
            {
                console.log(response.data);
                this.setState({items: response.data.items})
                alert("Add successful!") // TODO: make nicer alert in a div
            })
            .catch(err => {
                console.log(err)
            });
                })
        .catch(err => {
            console.log(err)
        })
        e.target.reset()
    }
    handleEdit = e => {
        e.preventDefault();
        let id = e.target[0].value;
        let editObj = {
            name : e.target[1].value,
            amount : e.target[2].value,
            unit : e.target[3].value,
            imageUrl : e.target[3].value,
            categoryID : e.target[4].value,
        }
        axios
        .put(`https://soup-kitchen-backend.herokuapp.com/api/items/${id}`,editObj)
        .then(response => {
            console.log("Updated " + response.data + " item")
            let options = { 
                headers: {
                    Authorization: localStorage.getItem("token"),
                }}
            axios
            .get('https://soup-kitchen-backend.herokuapp.com/api/items', options)
            .then(response => 
            {
                console.log(response.data);
                this.setState({items: response.data.items})
            })
            .catch(err => {
                console.log(err)
            });
        })
        .catch(err => {
            console.log(err)
        })
        e.target.reset();
    }

    deleteItem = (e, itemID, history) => {
        e.preventDefault();
        let options = { 
            headers: {
                Authorization: localStorage.getItem("token"),
            }}
        axios
        .delete(`https://soup-kitchen-backend.herokuapp.com/api/items/${itemID}`, options)
        .then(response => { 
            console.log("deleted records: " + response.data.deletedRecords);
            axios
            .get('https://soup-kitchen-backend.herokuapp.com/api/items', options)
            .then(response => 
            {
                console.log(response.data);
                this.setState({items: response.data.items})
            })
            .catch(err => {
                console.log(err)
            });
            history.push(`/`);
        })
        .catch(err => console.log(err))
    }

    logOut = () => {
        localStorage.clear();
        window.location.reload();
    }

    render() {
      return (
        <div className="inventory-page">
          <NavBar logOut={this.logOut}></NavBar>
          <Route exact path="/" render={(props) => <Inventory items={this.state.items} {...props}/>}/>
          <Route path="/add" render={(props) => <AddInventory handleAdd={this.handleAdd} {...props}/>}/>
          <Route path="/inventory/:id" render={(props) => <Item items={this.state.items} updateItem={this.updateItem} deleteItem={this.deleteItem} {...props}/>} />
          <Route path="/inventory/edit" render={(props) => <ItemEditForm items={this.state.items} {...props}/>} />
        </div>
      );
    }
  }
  
  export default InventoryPage;
  