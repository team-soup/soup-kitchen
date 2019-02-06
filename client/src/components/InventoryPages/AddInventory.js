import React from "react";

const AddInventory = props => {
    return (
        <div className="form-wrapper">
            <h2>Add items to inventory with this form:</h2>
            <form className="item-form" onSubmit={props.handleAdd}>
                <label>Item Name:</label>
                <input className="item-input" type="text" placeholder="name"/>
                <label>Item Quantity:</label>
                <input className="item-input" type="number" placeholder="quantity"/>
                <label>Item Units:</label>
                <input className="item-input" type="text" placeholder="units"/>
                <label>Image URL:</label>
                <input className="item-input" type="text" placeholder="image URL"/>
                <label>Category ID:</label>
                <input className="item-input" type="number" placeholder="category ID"/>
                <input className="item-input" type="submit"/>
            </form>
        </div>
    )
}

export default AddInventory;