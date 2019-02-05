import React from "react";

const EditInventory = props => {
    return (
        <div className="form-wrapper">
            <h2>Edit inventory items with this form!</h2>
            <form>
                <input type="text" placeholder="name"/>
                <input type="number" placeholder="quantity"/>
                <input type="text" placeholder="units"/>
                <input type="text" placeholder="image URL"/>
                <input type="number" placeholder="category ID"/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default EditInventory;