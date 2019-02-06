import React from "react";
import Inventory from "./Inventory";

const InventoryWrapper = props => {
    return (
        <div>
            <div></div>
            {/* <SearchBar handleSearch={props.handleSearch}/> */}
            <Inventory onError={props.onError} items={props.items}/>
        </div>
    )
}

export default InventoryWrapper