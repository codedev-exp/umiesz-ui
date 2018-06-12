import React from 'react';
import './MainMenu.scss';
import { Nav,
    Button, 
    Collapse,
    Navbar,
    NavbarToggler,
    NavItem,
    NavLink } from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
     Link
} from 'react-router-dom';
class MainMenu extends React.Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar expand="md">
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">Jak to działa ?</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">Dla korepetytora</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">Dla ucznia</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Kursy</NavLink>
                    </NavItem>
                    <NavItem>
                        <Link to="/login"><Button className="primaryButton"> Zaloguj </Button></Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/register"><Button color="secondary"> Zarejestruj </Button></Link>
                    </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>

            </div>

        );
    }
}

export default MainMenu;