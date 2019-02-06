import React from "react";

const Inventory = props => {
    const routeToItem = (e, item) => {
        e.preventDefault();
        props.history.push(`/inventory/${item.id}`);
      }
    return (
        <div className="items-list-wrapper">
        {props.items.map(item => (
            item.amount === 0 ?
            <div
            onClick={e => { 
                props.clearSearch(); 
                routeToItem(e, item);
            }}
            className="item-card-OUT"
            key={item.id}
            >
                <img
                    className="item-list-image-OUT"
                    onError={props.onError}
                    src={item.imageURL}
                    alt={item.name}
                />
                <div className="text-bubble">
                    <p><span className="quantity-OUT">{item.amount}</span> {item.unit}</p>
                    <p>{item.name}</p>
                </div>
            </div>
            :
            <div
            onClick={e => {
                props.clearSearch(); 
                routeToItem(e, item);
            }}
            className="item-card"
            key={item.id}
            >
                <img
                    className="item-list-image"
                    onError={props.onError}
                    src={item.imageURL}
                    alt={item.name}
                />
                <div className="text-bubble">
                    <p><span className="quantity">{item.amount}</span> {item.unit}</p>
                    <p>{item.name}</p>
                </div>
            </div>
        ))}
        </div>
    )
}

export default Inventory;