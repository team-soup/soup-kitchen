import React from "react";
import Inventory from "./Inventory";
import SearchBar from "../SearchBar/SearchBar";
import CategoryBar from "./CategoryBar";

const InventoryWrapper = props => {
    return (
        <div>
            <CategoryBar selectedCategory={props.selectedCategory} handleCategory={props.handleCategory}/>
            <SearchBar handleSearch={props.handleSearch}/>
            <Inventory clearSearch={props.clearSearch} history={props.history} onError={props.onError} items={props.items}/>
        </div>
    )
}

export default InventoryWrapper