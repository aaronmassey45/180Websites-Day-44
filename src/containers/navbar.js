import React, {Component} from 'react';
import { Nav,Navbar,NavItem } from 'react-bootstrap';

export default class NewNavbar extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">{this.props.brand}</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="http://aaronmassey.pro/">Home</NavItem>
            <NavItem eventKey={2} href="https://medium.com/@aaronmassey45">Blog</NavItem>
            <NavItem eventKey={3} href="https://github.com/aaronmassey45">GitHub</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
