import React from "react";
import { Component } from "react";
import {Container, Form, Button, Card} from 'react-bootstrap';
const { Configuration, OpenAIApi } = require("openai");

class Instagram extends Component{
  constructor(){
    super()
    this.state = {
      heading: 'The response from the AI',
      response: '...await the response'
    }
  }
  onFormSubmit = e =>{
    e.preventDefault()
    const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries())

    //OPENAI API Function

    const configuration = new Configuration({
      apiKey : process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    openai.createCompletion("text-curie-001", {
      prompt: `write a romantic content for ${formDataObj.contentWords}`,
      temperature: 0.29,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      
    }).then((response)=>{
      this.setState({
        heading:`${formDataObj.contentWords}`,
        response:`${response.data.choices[0].text}`
      })
    })

    this.setState({
      heading:`AI Instagram caption suggestion for: ${formDataObj.contentWords}`,
      response:`The response from OpenAI API:`
    })
  }
  render(){
    return (
      <div className="instagramPage mt-5 mb-5">
        <Container>
          <h1 className="mb-5">Generate Instagram Caption</h1>
          <h4>Generate Instagram caption for your posts and improve your engagement rate easily, by entering the keywords.</h4>
          <Form onSubmit={this.onFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>What are the words you want to get a caption for?</Form.Label>
              <Form.Control type="text" name="contentWords" placeholder="Enter the words"/>
              <Form.Text className="text-muted">
                Enter as much words as possible for a more accurate result.<br></br> Seprate your words with comma ",".
              </Form.Text>
            </Form.Group>
            <Button variant="primary" size="lg" type="submit" className="mb-3">Get the caption</Button>
          </Form>
          <Card>
            <Card.Body>
              <Card.Title>{this.state.heading}</Card.Title>
              <Card.Text>{this.state.response}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    )
  }
}
export default Instagram;