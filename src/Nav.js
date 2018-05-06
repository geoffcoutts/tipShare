import React, { Component } from 'react';
import { Navbar, MenuItem, Nav, NavDropdown, NavItem } from 'react-bootstrap';


class Navigation extends Component {
  constructor () {
    super();
    this.state = {
      currentUser: { username: 'Bob'}
    };
  }
  render() {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Sample App</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#Articles">
              Articles
            </NavItem>
            <NavItem eventKey={2} href="#Products">
              Products
            </NavItem>
            <NavDropdown eventKey={3} title="About" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href="#About-Us">About Us</MenuItem>
              <MenuItem eventKey={3.2} href="#Our-Team">Our Team</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3} href="#Careers">Careers</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4} href="#Contact-Us">Contact Us</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;