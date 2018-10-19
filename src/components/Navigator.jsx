import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Popups from './Popups';
import './Navigator.css'

export default class Navigator extends Component {
  render(){
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">BallC</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={2} title="Seasons" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1} href="/Season3" to="/Season3">Season 3</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={2.2} href="/Season2" to="/Season2">Season 2</MenuItem>
              <MenuItem eventKey={2.3} href="/Season1" to="/Season1">Season 1</MenuItem>
            </NavDropdown>
            <NavItem eventKey={3} href="/Teams" to="/Teams">
              Teams
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/User" to="/User">
              Profile
            </NavItem>Login

            <NavItem eventKey={1} onClick={Popups.handleShow}>
              Login
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
