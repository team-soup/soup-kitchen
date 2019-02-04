import React from "react";
import soup from "../img/crockpot_logo.png"
import styled from "styled-components";
import axios from "axios";

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

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: null,
        }
    }
    handleLogin = (email, password) => {
        axios
        .post('http://localhost:8000/api/staff/login', {email, password})
        .then(response => 
          {
            console.log(response.data.message)
            this.setState({token: response.data.token})
          })
        .catch(err => console.log(err));
    }
    render() {
        return (
            <Wrapper>
                <FormContainer>
                    <LoginContainer>
                        <ImageContainer>
                            <Image alt="soup" src={soup}/>
                        </ImageContainer>
                        <LoginForm onSubmit={(e) => {e.preventDefault(); this.handleLogin(e.target[0].value, e.target[1].value)}}>
                            <InputText type="text" placeholder="Email"/>
                            <InputText type="password" placeholder="Password"/>
                            <LoginButton type="submit" value="Log In"></LoginButton>
                        </LoginForm>
                    </LoginContainer>
                </FormContainer>
            </Wrapper>
        )
    }
}

export default Login;