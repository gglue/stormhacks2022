import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import axios from "axios";

import "./App.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [regEmail, regSetEmail] = useState("");
    const [regPassword, regSetPassword] = useState("");

    function validateLoginForm() {
        return username.length > 0 && password.length > 0;
    }

    function validateRegisterForm() {
        return regEmail.length > 0 && regPassword.length > 0;
    }

    function login(value) {
        value.preventDefault()
        axios.post("http://localhost:3001/api/login",
        {
            "email" : username,
            "password": password
        }).then(response => {
            if (response.status === 200 || response.status === 201) {
                console.log(response)
            }
        }).catch(error => {
            console.log(error)
        })
    }

    function register(value) {
        value.preventDefault()

        console.log(regEmail)
        console.log(regPassword)
        axios.post("http://localhost:3001/api/register",
        {
            "email" : regEmail,
            "password": regPassword
        }).then(response => {
            if (response.status === 200 || response.status === 201) {
                console.log(response)
            }
        }).catch(error => {
            console.log(error)
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <nav className="login">
            <Container>
                <Row>
                    <Form id="loginForm">
                        <Form.Group size="lg" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control autoFocus type="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                        </Form.Group>
                        <Button id="loginBtn" size="lg" type="submit" disabled={!validateLoginForm()} onClick={login}>Login</Button>
                    </Form>
                </Row>

                <Row>
                    <Form id="registerForm">
                        <h6>First time here? Sign up below.</h6>
                        <Form.Group size="lg" controlId="regEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control autoFocus type="Username" value={regEmail} onChange={(e) => regSetEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group size="lg" controlId="regPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={regPassword} onChange={(e) => regSetPassword(e.target.value)}/>
                        </Form.Group>
                        <Button id="registerBtn" size="lg" type="submit" disabled={!validateRegisterForm()} onClick={register}>Register</Button>
                    </Form>
                </Row>
            </Container>

        </nav>
    );
}

export default Login