import {NavLink} from 'react-router-dom';
import {Container, Navbar, Nav} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
function NavigationBar(){

    return(
        <nav className="navigationBar">
            <Navbar expand="lg">
                <Container>
                    <NavLink exact to ="/" className ="nav-link"><Navbar.Brand>Learn Morse Code!</Navbar.Brand></NavLink>
                    <Navbar id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink exact to ="/learn" className ="nav-link">Learn</NavLink>
                            <NavLink exact to ="/quiz" className ="nav-link">Quiz</NavLink>
                            <NavLink exact to ="/stats" className ="nav-link">Stats</NavLink>
                            <NavLink exact to ="/login" className ="nav-link">Login</NavLink>
                        </Nav>
                    </Navbar>
                </Container>
            </Navbar>
        </nav>
    )
}
export default NavigationBar