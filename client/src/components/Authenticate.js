import React from "react";
import axios from "axios";

const Authenticate = App => LoginPage => {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn : false,
                token : null,
            }
        }
        componentDidMount() {
            if (localStorage.getItem("token")) {
                this.setState({loggedIn: true});
                this.setState({token:localStorage.getItem("token")});
            }
        }
        handleLogin = (event) => {
            event.preventDefault();
            let loginObj = {
                email : event.target[0].value,
                password : event.target[0].value,
            }
            axios
            .post('http://localhost:8000/api/staff/login', loginObj)
            .then(response => 
              {
                console.log(response.data.message)
                this.setState({token: response.data.decodedToken})
                localStorage.setItem("token", response.data.decodedToken)
                this.setState({loggedIn: true});
              })
            .catch(err => console.log(err));
          }
        handleRegister = (event) => {
            event.preventDefault();
            let registerObj = {
                name : event.target[0].value,
                email : event.target[1].value,
                password : event.target[2].value,
                role : event.target[3].value,
            }
            axios
            .post('http://localhost:8000/api/staff/register', registerObj)
            .then(response => 
              {
                console.log(response.data.message)
                this.setState({token: response.data.decodedToken})
              })
            .catch(err => console.log(err));
          }
        render() {
            if (this.state.loggedIn) {
            return (
                <App/>
            )
            } else {
                return (<LoginPage handleLogin={this.handleLogin} handleRegister={this.handleRegister} />)
            }
        }
    }
}

export default Authenticate;