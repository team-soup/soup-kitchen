import React from 'react';
import axios from "axios";

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      item: {
          name: '',
          amount: '',
          unit: '',
          imageURL: '',
          categoryID: '',
      },
    }
  }
  handleDecrement = (id, item) => {
    let options = { 
      headers: {
          Authorization: localStorage.getItem("token"),
      }}
    let itemObj = {
      name: item.name,
      amount: item.amount - 1,
      unit: item.unit,
      imageURL: item.imageURL,
      categoryID: item.categoryID,
    }
    axios
      .put(
        `https://soup-kitchen-backend.herokuapp.com/api/items/${id}`,
        itemObj,options
      )
      .then(response => {
        console.log(response)
        this.props.handleUpdate();
        this.setState(this.state)
      })
      .catch(error => console.log(error));
    }
  handleIncrement = (id, item) => {
    let options = { 
      headers: {
          Authorization: localStorage.getItem("token"),
      }}
    let itemObj = {
      name: item.name,
      amount: item.amount + 1,
      unit: item.unit,
      imageURL: item.imageURL,
      categoryID: item.categoryID,
    }
    axios
      .put(
        `https://soup-kitchen-backend.herokuapp.com/api/items/${id}`,
        itemObj,options
      )
      .then(response => {
        console.log(response)
        this.props.handleUpdate();
        this.setState(this.state)
      })
      .catch(error => console.log(error));
  }

  render() {
    let item = this.props.items.find(thing => `${thing.id}` === this.props.match.params.id);
    if (!item) {
      return  <div></div>;
    }
    return (
      <div className="item-wrapper">
        <div className="item-header">
          <div className="image-wrapper">
            <img onError={this.props.onError} src={item.imageURL} alt={item.name} />
          </div>
          <div className="item-title-wrapper">
            <h2>{item.name}</h2>
            <div className="quantity-modifier">
              <button onClick={() => this.handleDecrement(item.id, item)}>-</button>
              <h4>{item.amount} {item.unit}</h4> 
              <button onClick={() => this.handleIncrement(item.id, item)}>+</button>
            </div>
            <h4>Category ID: {item.categoryID}</h4>
          </div>
        </div>
        <div className="button-wrapper">
        <button
          onClick={event => {
            const location = {
                pathname: `/inventory/edit`,
                state: { item }
            }
            this.props.history.push(location);
          }}
          className="update-button"
        >
          Update item
        </button>
        <button
          onClick={event => {
            this.props.deleteItem(event, item.id, this.props.history);
          }}
          className="delete-button"
        >
          Delete item
        </button>
        </div>
      </div>
    );
  }
}


export default Item;
