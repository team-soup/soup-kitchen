import React from 'react';

const Item = ({ items, deleteItem, history, match, onError }) => {
  const item = items.find(thing => `${thing.id}` === match.params.id);

  if (!item) {
    return  <div></div>;
  }

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img onError={onError} src={item.imageURL} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <div className="quantity-modifier"><button>-</button><h4>{item.amount} {item.unit}</h4> <button>+</button></div>
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
          history.push(location);
        }}
        className="update-button"
      >
        Update item
      </button>
      <button
        onClick={event => {
          deleteItem(event, item.id, history);
        }}
        className="delete-button"
      >
        Delete item
      </button>
      </div>
    </div>
  );
}

export default Item;
