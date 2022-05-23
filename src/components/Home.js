import React from "react";
import { Component } from 'react';
import Service from "./Service";
import { Container, Row, Col, Coursel } from 'react-bootstrap';


class Home extends Component{
  render(){
    return(
      <div className=" mb-5">
        <div className="Description mb-5 text-center typewriter">
          <h1 className="align-middle">FEEL THE POWER OF AI</h1>
        </div>
        <Container>
          <div className="mb-5">
            <h2 className="mb-3">CONTENT GENERATOR</h2>
            <p>Welcome to CONTENT GENERATOR! This tool is designed to help you create high-quality, SEO-friendly content for your website, or caption for your instagram post. First, let's get started by choosing a service. Once you've selected a service, you can start. To start, you'll need to choose some key-words. To get a more accurate content or caption, we recommend using a clear and concise style, and entering as much words as posible. To finish, submit your words. Repeat these steps until you reach your desired result.<br></br>
              <div className="text-muted">(This content was created using the CONTENT GENERATOR SEO tool.)</div>
            </p>
          </div>
        </Container>
        <Container>
          <Row>
            <Col>
              <Service
                header="Instagram Caption"
                title="Generate Instagram caption"
                text="Generate Instagram caption for your posts an improve ypur engagement rate easily, by entering the keywords."
                link="/Instagram"/>
            </Col>
            <Col>
              <Service
                header="SEO-friendly Content"
                title="Generate SEO-friendly Content"
                text="Generate SEO-friendly Content for your website and improve your ranking easily, by entering the keywords."
                link="/Instagram"/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Home;