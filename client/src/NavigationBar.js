import {NavLink} from 'react-router-dom';
import {Container, Navbar, Nav} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
function NavigationBar(){

    return(
        <nav className="navigationBar">
            <Navbar expand="lg">
                <Container>
                    <NavLink exact to ="/" activeClassName="selected" activeStyle={{color: "white", background: "black"}} className ="nav-link"><Navbar.Brand>Learn Morse Code!</Navbar.Brand></NavLink>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink exact to ="/learn" activeClassName="selected" activeStyle={{color: "white", background: "black"}} className ="nav-link">Learn</NavLink>
                            <NavLink exact to ="/quiz" activeClassName="selected" activeStyle={{color: "white", background: "black"}} className ="nav-link">Quiz</NavLink>
                            <NavLink exact to ="/stats" activeClassName="selected" activeStyle={{color: "white", background: "black"}} className ="nav-link">Stats</NavLink>
                            <NavLink exact to ="/login" activeClassName="selected" activeStyle={{color: "white", background: "black"}} className ="nav-link">Login</NavLink>
                        </Nav>

                    </Navbar>
                </Container>
            </Navbar>
        </nav>
    )
}
export default NavigationBar