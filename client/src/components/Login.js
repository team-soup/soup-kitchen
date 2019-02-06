import React from "react";
import soup from "../img/crockpot_logo.png"
import styled from "styled-components";

const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    padding-top: 3vh;
`;

const FormContainer = styled.div`
    max-width: 349px;
    width: 100%;
`;

const LoginContainer = styled.div`
    margin: 30px 0 0 0;
    width: 100%;
    height: 400px;
    background: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 3px;
    `;

const RegisterContainer = styled.div`
    margin: 30px 0 0 0;
    width: 100%;
    height: 500px;
    background: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 3px;
    `;


const ImageContainer = styled.div`
    width: 54%;
    margin: 21px auto;
    `;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 6px 10%;
`;

const InputText = styled.input`
    height: 33px;
    margin: 0 0 7px 0;
    padding: 0 0 0 9px;
    border: 1px solid #edecec;
    background: #f9f9f9;
    border-radius: 3px;
    -webkit-appearance: none;
    font-size: 14px;
`;

const LoginButton = styled.input`
    height: 32px;
    background: #d66565;
    color: #fff;
    opacity: .65;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
`;

const LinkButton = styled.button`
    color: blue;
    border-radius: 5px;
    border: none;
    background-color: white;
    padding: 10px;
    margin-top: 20px;
`;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "login",
        }
    }
    showRegister = () => {
        this.setState({display : "register"})
    }
    showLogin = () => {
        this.setState({display: "login"})
    }
    render() {
        return (
            <Wrapper>
                <FormContainer>
                    { this.state.display === "login" ?                     
                    <LoginContainer>
                        <ImageContainer>
                            <Image alt="soup" src={soup}/>
                        </ImageContainer>
                        <LoginForm onSubmit={(e) => {this.props.handleLogin(e)}}>
                            <InputText type="text" placeholder="Email"/>
                            <InputText type="password" placeholder="Password"/>
                            <LoginButton type="submit" value="Log In"></LoginButton>
                            <LinkButton type="button" className="link-button" onClick={this.showRegister}>New User? Register here.</LinkButton>
                        </LoginForm>
                        
                    </LoginContainer> 
                    : 
                    <RegisterContainer>
                        <ImageContainer>
                            <Image alt="soup" src={soup}/>
                        </ImageContainer>
                        <LoginForm onSubmit={(e) => {this.props.handleRegister(e)}}>
                            <InputText type="text" placeholder="First Name"/>
                            <InputText type="text" placeholder="Last Name"/>
                            <InputText type="text" placeholder="Role"/>
                            <InputText type="text" placeholder="Email"/>
                            <InputText type="password" placeholder="Password"/>
                            <LoginButton type="submit" value="Log In"></LoginButton>
                            <LinkButton type="button" className="link-button" onClick={this.showLogin}>Already have an account? Log in here.</LinkButton>
                        </LoginForm>
                        
                    </RegisterContainer>
                    
                    }
                </FormContainer>
            </Wrapper>
        )
    }
}

export default Login;