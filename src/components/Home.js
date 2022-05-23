import React from "react";
import { Component } from 'react';
import Service from "./Service";
import { Container, Row, Col, Coursel } from 'react-bootstrap';


class Home extends Component{
  render(){
    return(
      <div>
        <Container>
          <h1>This is OpenAI API</h1>
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