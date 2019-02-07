import React from "react";
import axios from "axios";
import Select from 'react-select';

class AddInventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption : null,
            categories : [],
        }
    }
    componentDidMount() {
        let options = { 
            headers: {
                Authorization: localStorage.getItem("token"),
            }}
        axios.get(`https://soup-kitchen-backend.herokuapp.com/api/categories`, options)
        .then(resp => {this.setState({categories:resp.data.categories});})
        .catch(err => {alert("Unable to obtain categories from back-end."); console.log(err)})
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption : selectedOption });
      }
    render() {
        const options = this.state.categories.map(obj => ({value: obj.id, label: obj.name}))
        
        return (
            <div className="form-wrapper">
                <h2>Add items to inventory with this form:</h2>
                <form className="item-form" onSubmit={(e) => this.props.handleAdd(e, this.state.selectedOption.value)}>
                    <label>Item Name:</label>
                    <input className="item-input" type="text" placeholder="name"/>
                    <label>Item Quantity:</label>
                    <input className="item-input" type="number" placeholder="quantity"/>
                    <label>Item Units:</label>
                    <input className="item-input" type="text" placeholder="units"/>
                    <label>Image URL:</label>
                    <input className="item-input" type="text" placeholder="image URL"/>
                    <label>Category ID:</label>
                    <Select
                        className="select"
                        menuPlacement="top"
                        value={this.state.selectedOption}
                        onChange={this.handleChange}
                        options={options}
                    />
                    {/* <input className="item-input" type="number" placeholder="category ID"/> */}
                    <input className="item-input" type="submit"/>
                </form>
            </div>
        )
    }
}

export default AddInventory;