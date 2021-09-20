import React from "react";
import{BiDish} from 'react-icons/bi';
import {FaInstagram,FaFacebookF,FaTwitter} from 'react-icons/fa';
import { Container, Row, Col} from 'react-bootstrap';




function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="main-footer">
      <Container bg="light">
          
          <Row className="mt-3">
              <Col xs={6} md={8}>
              <Row>
              <Col sm={3} className="mt-1">
              <BiDish size="2.1em" />
                <span>HomeFoods</span>
                
              </Col>
              <Col sm={3}><a href="/About" className="nav-link text-dark">About Us</a></Col>
              <Col sm={3}><a href="/Join" className="nav-link text-dark">Join Us</a></Col>
              <Col sm={3}><a href="/Contact" className="nav-link text-dark">Contact Us</a></Col>
              </Row>
              </Col>
              <Col xs={6} md={4} >
                <Row className="justify-content-center align-items-center">
                  <Col xs={4} md={3} >
                  <a href="/About" className="text-dark"><FaFacebookF size="1.3em"/></a>
                  </Col>
                  <Col xs={4} md={3}>
                  <a href="/About" className="text-dark"><FaInstagram size="1.3em"/></a>
                  </Col>
                  <Col xs={4} md={3}>
                    <a href="/About" className="text-dark"><FaTwitter size="1.3em"/></a>
                  </Col>
                </Row>
                  
                  

              </Col>


          </Row>
          <hr></hr>
          <Row className="footer-css">
          <p> ⓒ {year} HomeFoods | All rights Reserved</p>
          </Row>
          
      </Container>
    </div>
  );
}

export default Footer;
