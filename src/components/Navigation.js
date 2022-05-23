import React from "react";
import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Container } from "react-bootstrap";

class Navigation extends Component{
  render(){
    return(
      <div className="navigation">
        <Navbar>
          <Container>
            <Navbar.Brand href="/">CONTENT GENERATOR</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="Instagram">Instagram</Nav.Link>
                <Nav.Link href="SeoContent">SEO</Nav.Link>
              </Nav>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                A tool to help you generate content easily.
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}
export default Navigation;