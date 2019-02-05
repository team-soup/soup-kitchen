import React from 'react';

const Item = ({ items, deleteItem, history, updateItem, match }) => {
  const item = items.find(thing => `${thing.id}` === match.params.id);

  if (!item) {
    return  <div className="item-wrapper"><h2>Loading item data...</h2></div>;
  }

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>{item.amount} {item.unit}</h4>
          <h4>Category ID: {item.categoryID}</h4>
        </div>
      </div>
      <div className="button-wrapper">
      <button
        onClick={event => {
          updateItem(event, item);
          history.push(`/edit/${item.id}`);
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
