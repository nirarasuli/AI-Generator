import React from "react";
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button, Nav } from 'react-bootstrap';

class Service extends Component{
  render(){
    const { header, title, text, link} = this.props

    return(
      <div>
        <Card>
          <Card.Header as="h5">{header}</Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Nav.Link href={link}>
            <Button variant="primary">Get started</Button>
            </Nav.Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
export default Service;