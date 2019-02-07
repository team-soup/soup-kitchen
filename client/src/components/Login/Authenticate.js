import React from "react";
import axios from "axios";

const Authenticate = App => LoginPage => {
    return class extends React.Component {
        constructor() {
            super();
            this.snackbar = React.createRef();
            this.state = {
                loggedIn : false,
                token : null,
            }
        }
        componentDidMount() {
            if (localStorage.getItem("expiry")) {
                let expiry = localStorage.getItem("expiry")
                if (Number(Date.now().toString().slice(0,10)) > expiry) {
                    localStorage.clear();
                    window.location.reload();
                    this.setState({loggedIn:false});
                } else {
                    if (localStorage.getItem("token")) {
                        this.setState({loggedIn: true});
                        this.setState({token:localStorage.getItem("token")});
                    } else {
                        localStorage.clear();
                    }
                }
            }
            else {
                this.setState({loggedIn:false});
            }
        }
        handleLogin = (event) => {
            event.preventDefault();
            let loginObj = {
                email : event.target[0].value,
                password : event.target[1].value,
            }
            axios
            .post('https://soup-kitchen-backend.herokuapp.com/api/staff/login',loginObj)
            .then(response => 
              {
                this.setState({token: response.data.token})
                localStorage.setItem("token", response.data.token)
                this.setState({loggedIn: true});
              })
            .catch(err => {
                this.showSnackBar("Wrong password, or user doesn't exist.");
                //alert("Wrong password, or user doesn't exist.")
                console.log(err)
            });
          }
        handleRegister = (event) => {
            event.preventDefault();
            let registerObj = {
                firstname : event.target[0].value,
                lastname : event.target[1].value,
                role : event.target[2].value,
                email : event.target[3].value,
                password : event.target[4].value,
            }
            axios
            .post('https://soup-kitchen-backend.herokuapp.com/api/staff/register', registerObj)
            .then(response => 
              {
                console.log(response.data.message)
                this.setState({token: response.data.token})
                localStorage.setItem("token", response.data.token)
                this.setState({loggedIn: true});
              })
            .catch(err => 
                {
                    this.showSnackBar("Email already in use, or registration error.");
                    //alert("Have you already used this email address to register? To reset your password, please contact the administrator.")
                });
          }
        handleTokenExpired = () => {
            this.setState({loggedIn : false});
        }
        showSnackBar = (text) => {
            let x = this.snackbar.current;
            x.textContent = text;
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        }
        render() {
            if (this.state.loggedIn) {
            return (
                <App handleTokenExpired={this.handleTokenExpired}/>
            )
            } else {
                return (
                <div><LoginPage handleLogin={this.handleLogin} handleRegister={this.handleRegister} />
                 <div style={{"backgroundColor": "#7F0000", "opacity":0.8}} id="snackbar" ref={this.snackbar}><h1>Please contact the administrator.</h1></div></div>)
            }
        }
    }
}

export default Authenticate;