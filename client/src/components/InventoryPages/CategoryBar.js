import React from "react";
import axios from "axios";

class CategoryBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            selectedTab: null,
        }
    }
    componentDidMount() {
        let options = { 
            headers: {
                Authorization: localStorage.getItem("token"),
            }}
          axios.get(`https://soup-kitchen-backend.herokuapp.com/api/categories`, options)
          .then(resp => {
              let allCategories = resp.data.categories;
              allCategories.push({id: -1, name: "show all"}) 
              this.setState({categories:allCategories});})
          .catch(err => {alert("Unable to obtain categories from back-end."); console.log(err)})
    }
    handleClick = (e) => {
        this.props.handleCategory(e.target.id);
    }
    render() {
        return (
            <div className="categories">
                {this.state.categories.map(category => {
                    return category.id.toString() !== this.props.selectedCategory ? 
                    <button className="category" onClick={this.handleClick} name={category.name} id={category.id} key={category.id}>{category.name}</button>
                    :
                    <button className="category category-active" onClick={this.handleClick} name={category.name} id={category.id} key={category.id}>{category.name}</button>
                    })}
            </div>
        )
    }
}

export default CategoryBar;