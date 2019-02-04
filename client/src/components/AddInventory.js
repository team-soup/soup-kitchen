import React from "react";

const AddInventory = props => {
    return (
        <div className="form-wrapper">
            <h2>Add items to inventory with this form:</h2>
            <form>
                <input type="text" placeholder="name"/>
                <input type="number" placeholder="quantity"/>
                <input type="text" placeholder="units"/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default AddInventory;