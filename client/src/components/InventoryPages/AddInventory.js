import React from "react";
import axios from "axios";
import Select from 'react-select';

class AddInventory extends React.Component {
    constructor(props) {
        super(props);
        this.snackbar = React.createRef();
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
    showSnackBar = () => {
        let x = this.snackbar.current;
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
    render() {
        const options = this.state.categories.map(obj => ({value: obj.id, label: obj.name}))
        
        return (
            <div className="form-wrapper">
                <form className="item-form" onSubmit={(e) => this.props.handleAdd(e, this.state.selectedOption.value, this.showSnackBar)}>
                    <label>Item Name:</label>
                    <input className="item-input" type="text" placeholder="name"/>
                    <label>Item Quantity:</label>
                    <input className="item-input" type="number" placeholder="quantity"/>
                    <label>Item Units:</label>
                    <input className="item-input" type="text" placeholder="units"/>
                    <label>Image URL:</label>
                    <input className="item-input" type="text" placeholder="image URL"/>
                    <label>Category:</label>
                    <Select
                        className="select"
                        menuPlacement="top"
                        value={this.state.selectedOption}
                        onChange={this.handleChange}
                        options={options}
                    />
                    {/* <input className="item-input" type="number" placeholder="category ID"/> */}
                    <input className="item-input" value="Add to Inventory" type="submit"/>
                </form>
                <div id="snackbar" ref={this.snackbar}><h1>Successfully added item!</h1></div>
            </div>
        )
    }
}

export default AddInventory;