import React from "react";
import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from "react-bootstrap";

const Footer = () => 
<div>
  <Container>
  <footer className="page-footer font-small blue pt-4">
      <div className="container-fluid text-md-left">
          <div className="row justify-content-between">
              <div className="col-md-5 mt-md-0 mt-3">
                  <h5 className="text-uppercase">Content Generator</h5>
                  <p>Creating content has never been easier. This tool utilizes AI (Artificial Inteligence) to create meaningful content. Simply enter the words and get SEO-friendly content for your website, or Instagram caption for your next post.</p>
              </div>
              <div className="col-md-2 mb-md-0 mb-3">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled">
                      <li><a href="Instagram">Instagram</a></li>
                      <li><a href="SeoContent">SEO</a></li>
                  </ul>
              </div>
          </div>
      </div>
      <div className="footer-copyright text-center py-3">© 2022 Copyright:
          <a target="_blank" href="https://nirarasuli.com/"> nirarasuli.com</a>
      </div>
  </footer>
  </Container>
</div>
export default Footer;