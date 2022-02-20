import React, { useState, useEffect } from "react";
import {NavLink} from 'react-router-dom';
import {Container, Navbar, Nav} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios"

function NavigationBar(){

    const [state, setState] = useState({
        isLoggedOut: true
    })

    useEffect(() => {
        function getData() {
            // Get user stats
            axios("http://localhost:5000/api/isAuth", {
                method: "get",
                withCredentials: true
            }).then(result => {
                if (result.status === 200 || result.status === 201) {
                    setState({
                        isLoggedOut: false})
                }
                else {
                    setState({
                        isLoggedOut: true})
                }
            }).catch(error => {
                setState({
                    isLoggedOut: true})
                console.log(error)
            })
        }
        getData();
    },[])

    return(
        <nav className="navigationBar">
            <Navbar expand="lg">
                <Container>
                    <NavLink exact to ="/" className ="nav-link"><Navbar.Brand>Learn Morse Code!</Navbar.Brand></NavLink>
                    <Navbar id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink exact to ="/learn" className ="nav-link">Learn</NavLink>
                            {state.isLoggedOut ? null : <NavLink exact to ="/quiz" className ="nav-link">Quiz</NavLink>}
                            {state.isLoggedOut ? null : <NavLink exact to ="/stats" className ="nav-link">Stats</NavLink>}
                            {state.isLoggedOut ? <NavLink exact to ="/login" className ="nav-link">Login</NavLink> : <NavLink exact to ="/logout" className ="nav-link">Logout</NavLink>}
                        </Nav>
                    </Navbar>
                </Container>
            </Navbar>
        </nav>
    )
}
export default NavigationBar