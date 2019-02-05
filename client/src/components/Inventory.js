import React from "react";

const Inventory = props => {
    return (
        <div className="items-list-wrapper">
        {props.items.map(item => (
            <div
            className="item-card"
            key={item.id}
            >
            <img
                className="item-list-image"
                src={item.imageUrl}
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