import React from 'react';
import {Container, Row, Image ,Col,Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Joinus = () => {
    return (
        <div class="content">
            
            <Container>
                <Row className="row-content">
                    <Carousel fade touch>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src="assets/images/5369585.jpg"
                            alt="First slide"
                            fluid/>
                            <Carousel.Caption className="text-info d-none d-md-block">
                                <h3>Come.. Join US!</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum!
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src="assets/images/5341704.jpg"
                            alt="Second slide"
                            />
                            <Carousel.Caption className="d-none d-md-block " >
                                <h3>Lets Make world colorful - Together!</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum!
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src="assets/images/5362885.jpg"
                            alt="Third slide"
                            />
                            <Carousel.Caption className="text-secondary d-none d-md-block">
                                <h3>Lorem ipsumdolor sit amet! </h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum!
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <Row className="row-content align-items-center">
                    <Col md={6}>
                    <Image src="assets/images/24081502.jpg" fluid></Image>
                    </Col>
                    <Col md={6} className="text-center align-self-center">
                        <h3>Become HomeChefs!</h3>
                        <p>Want to make people enjoy your food? Then you are at the right place!
                            Join our Homefoods family and together let's make a million happy faces!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum!    </p>
                        <p>#LetsEnjoyHomeFood</p>    
                    </Col>

                </Row>
                <Row className="row-content align-items-center">
                    <Col md={6} className="text-center align-self-center">
                        <h3>Promote our Cultures!</h3>
                        <p>Traditonal dishes are part of our cultures. Together, let's save our traditions and cultural tastes!
                            Let's help people who miss their homes , feel they are at Home! Be the part of it and Let's spread Love! 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! </p>
                        <p>#LetsEnjoyHomeFood</p>    
                    </Col>
                    <Col md={6}>
                    <Image src="assets/images/11949.jpg" fluid></Image>
                    </Col>

                </Row>
                <Row className="row-content align-items-center">
                    <Col md={6}>
                    <Image src="assets/images/11229.jpg" fluid></Image>
                    </Col>
                    <Col md={6} className="text-center align-self-center">
                    <h3>Be your Own Boss!</h3>
                    <p>Invest your cooking time and reward yourself! Get yourself self-employed through our platform!
                        Women-empowerment is our top priority! With simple 3 easy steps, register yourselves and go live
                        with your Business! Happy Cooking!!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum!
                    </p>
                    <p>#LetsEnjoyHomeFood</p>
                    </Col>



                </Row>
                
            </Container>
            
        </div>
    )
}

export default Joinus;
