import React from "react";

const AddInventory = props => {
    return (
        <div className="form-wrapper">
            <h2>Add items to inventory with this form:</h2>
            <form className="item-form" onSubmit={props.handleAdd}>
                <input className="item-input" type="text" placeholder="name"/>
                <input className="item-input" type="number" placeholder="quantity"/>
                <input className="item-input" type="text" placeholder="units"/>
                <input className="item-input" type="text" placeholder="image URL"/>
                <input className="item-input" type="number" placeholder="category ID"/>
                <input className="item-input" type="submit"/>
            </form>
        </div>
    )
}

export default AddInventory;