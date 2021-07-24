import React from 'react';
import {Container, Row,Col,Image,Form,Button,ButtonGroup} from 'react-bootstrap';

import {FaFax , FaPhoneAlt,FaEnvelopeOpenText,FaSkype} from 'react-icons/fa';


const Contactus = () => {
    return (
        <div class="content">
            <Container>
                <Row className="justify-content-center p-1 bg-light" >
                    <Col md={3} className="text-center align-self-center " >
                        <h1>
                            Contact us!
                        </h1>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        Nulla vitae elit libero, a pharetra augue mollis interdum.    </h6>
                    </Col>
                    <Col md={9}>
                    <Image src="assets/images/drawing2412.jpg" fluid></Image>
                    </Col>
                </Row>
                <Row className="row-content">
                    <Col md={6}>
                        <Image src="assets/images/4900374.jpg" fluid></Image>
                    </Col>
                    <Col md={6} className="text-center align-self-center">
                       <h5>Our Address</h5>
                       <address style={{fontSize:'25px'}}>
                           121, 3rd Cross, Sector-b <br></br>
                           New Yelhanka Town - 562157<br></br>
                           <FaPhoneAlt /> : +91 - 8237893224<br></br>
                           <FaFax /> : +91 - 9863457623<br></br>
                           <FaEnvelopeOpenText />: <a href="mailto:Homefoods@gmail.com"> HomeFoods@Food.net</a>
                       </address>
                       <ButtonGroup size="lg" className="mb-2">
                            <a role="button" class="btn btn-primary" href="tel:+85212345678"><FaPhoneAlt /> Call</a>
                            <a role="button" class="btn btn-info" href="/Home"><FaSkype /> Skype</a>
                            <a role="button" class="btn btn-success" href="mailto:confusion@food.net"><FaEnvelopeOpenText /> Mail</a>
                        </ButtonGroup>

                    </Col>

                </Row>
                <Row className="row-content justify-content-center">
                    <Col xs={12}>
                    <h5>Send us your Feedback:</h5>
                    </Col>
                    <Col xs={12}>
                    <Form>
                    <Form.Row className="justify-content-center">
                        <Col md={6}>
                        <Form.Group  controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" required/>
                        
                        </Form.Group>
                        </Col>

                        <Col md={6}>
                        <Form.Group  controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row className="justify-content-center">
                        <Col md={6}>
                        <Form.Group  controlId="formGridFirstName">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                        
                        </Form.Group>
                        </Col>

                        <Col md={6}>
                        <Form.Group  >
                        <Form.Label>Contact</Form.Label>
                        <Form.Control type="tel" placeholder="Contact No." />
                        </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>Send your Feedback!</Form.Label>
                        <Form.Control as="textarea" placeholder="Leave a comment here.." style={{height:'200px'}} />
                    </Form.Group>
                    <Form.Row className="justify-content-center">
                    <Button variant="outline-success" type="submit">
                        Submit
                     </Button>
                    </Form.Row>
                    </Form>
                    </Col>

                </Row>
            </Container>
            
        </div>
    )
}

export default Contactus;
