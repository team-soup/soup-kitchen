import React from "react";
import Inventory from "./Inventory";
import SearchBar from "../SearchBar/SearchBar";

const InventoryWrapper = props => {
    return (
        <div>
            <SearchBar handleSearch={props.handleSearch}/>
            <Inventory history={props.history} onError={props.onError} items={props.items}/>
        </div>
    )
}

export default InventoryWrapper