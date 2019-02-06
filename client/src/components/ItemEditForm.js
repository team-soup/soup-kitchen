import React from 'react';
import { withRouter } from 'react-router';
import axios from "axios";

class ItemEditForm extends React.Component {
  state = {
    id: '',
    item: {
        name: '',
        amount: '',
        unit: '',
        imageURL: '',
        categoryID: '',
    },
  };
  componentDidMount() {
      let itemObj = {
        name: this.props.location.state.item.name,
        amount: this.props.location.state.item.amount,
        unit: this.props.location.state.item.unit,
        imageURL: this.props.location.state.item.imageURL,
        categoryID: this.props.location.state.item.categoryID,
      };
      this.setState({
        id: this.props.location.state.item.id,
        item: itemObj
        });
  }
  changeHandler = e => {
    this.setState({
      item: {
        ...this.state.item,
        [e.target.name]: e.target.value
      }
    });
  };

  updateItem = () => {
    let options = { 
        headers: {
            Authorization: localStorage.getItem("token"),
        }}
    axios
      .put(
        `https://soup-kitchen-backend.herokuapp.com/api/items/${this.state.id}`,
        this.state.item,options
      )
      .then(response => {
        axios
        .get('https://soup-kitchen-backend.herokuapp.com/api/items', options)
        .then(response => 
        {
            this.setState({items: response.data.items})
        })
        .catch(err => {
            console.log(err)
        });
        alert("Item updated successfully!")
        window.location.reload();
        this.props.history.push("/"); // TODO: make this update smoother.
      })
      .catch(error => console.log(error));
  };

  handleClick = e => {
    e.preventDefault();
    this.updateItem();
  };

  render() {
    return (
      <div className="form-wrapper">
      <h2 style={{"textTransform": "capitalize"}}>Editing Item ID {this.state.id}: {this.state.item.name}</h2>
      <form className="item-form" action="">
        <label>Item Name:</label>
        <input
          className="item-input"
          type="text"
          name="name"
          onChange={this.changeHandler}
          placeholder="name"
          value={this.state.item.name}
        />
        <div className="baseline" />
        <label>Item Quantity:</label>
        <input
          className="item-input"
          type="text"
          placeholder="amount"
          name="amount"
          onChange={this.changeHandler}
          value={this.state.item.amount}
        />
        <div className="baseline" />
        <label>Item Units:</label>
        <input
          className="item-input"
          type="text"
          name="unit"
          onChange={this.changeHandler}
          placeholder="units"
          value={this.state.item.unit}
        />
        <div className="baseline" />
        <label>Image URL:</label>
        <input
          className="item-input"
          type="text"
          name="imageURL"
          onChange={this.changeHandler}
          placeholder="image url"
          value={this.state.item.imageURL}
        />
        <div className="baseline" />
        <label>Item Category:</label>
        <input
          className="item-input"
          type="number"
          name="categoryID"
          onChange={this.changeHandler}
          placeholder="category ID"
          value={this.state.item.categoryID}
        />
        <div className="baseline" />
        <button className="edit-button" onClick={this.handleClick}>
          Update Item
        </button>
      </form>
    </div>
    );
  }
}

//export default withRouter(ItemEditForm);
export default ItemEditForm;
