import React from 'react';
import {Container, Row, Col,Image,CardColumns,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

 const About = () => {
    return (
        <div className="content">
            <Container>
                <Row  className="row-content justify-content-end intro">
                    
                    <Col md={6}>
                        <h6 >Say no to</h6>
                        <h2>Bahar ka Khaana!</h2>
                        <h6>Enjoy the</h6>
                        <h1>Ghar ka Khaana!</h1>
                        <p>Missing home cooked food? No worries anymore!
                             Enjoy the Home cooked meals anywhere and anytime!</p>
                        <p>#LetsEnjoyHomeFood</p>     
                    </Col>

                    
                    


                </Row>
                <Row className="row-content align-items-center">
                    <Col md={6} className="text-center align-self-center">
                        <h3>Meet Home Chefs</h3>
                        <p>Enjoy the food prepared by our home chefs! Home chefs are the Mothers, who cook at their own comfort in their homes, with healthy ingredients, trusted taste and with pure love!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum!  </p>
                    </Col>
                    <Col md={6} >
                    <Image src="assets/images/10767.jpg" fluid/>
                    </Col>
                   

                </Row>
                <Row className="row-content align-tems-center">
                    <Col md={6}>
                        <Image src="assets/images/39451912.jpg" fluid ></Image>

                    </Col>
                    <Col md={6} className="text-center align-self-center">
                        <h3>Eat What You Love!</h3>
                        <p>Missing your cultural or regional home cooked food? 
                            No worries anymore! With wide variety of choices from different region home cooked foods, choose ur favourite
                            and savour it! Be it vadapav or chettinad chicken, Machar jhol or Mangalore fish curry...Enjoy the delicacies
                            at our Homefoods!
                        </p>
                    </Col>

                </Row>
                <Row className="row-content align-tems-center">
                    <Col md={6} className='text-center align-self-center'>
                        <h3>Healthy and Hygienic!</h3>
                        <p>The most Hygienic and Healthy place is indeed HOME! With our Homechefs cooking in their homes at their own comfort,
                            the hygiene is guaranteed and ofcourse, the ingredients too are healthy! we do a no contact delivery and follow 
                            all the rules and guidleines provided by health minsitry for safe and healthy food delivery! So just Eat and Chill! 

                        </p>
                    </Col>
                    <Col md={6}>
                        <Image src="assets/images/3883073.jpg" fluid></Image>
                    </Col>


                </Row>
                <Row className="row-content ">
                    <h5 className="mb-4">Some of our Customer Testimonials:</h5>
                    
                    <CardColumns>
                    <Card className="p-4" bg="warning" text="primary">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                           Simple and Best! Service is top-notch and the food is amazing!
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                  Surya , <cite title="Source Title">Software Engineer</cite>
                             </small>
                        </footer>
                        </blockquote>
                    </Card>
                    <Card className="p-5 " bg="dark " text="light">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            I miss my home after tasting this food from @HomeFoods! simply Amazing! 
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Pranav K  , <cite title="Source Title">Designer</cite>
                             </small>
                        </footer>
                        </blockquote>
                    </Card>
                    <Card className="p-1" bg="light" text="dark">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Tastes amazing and healthy food! Must try!
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Teja, <cite title="Source Title">Architect</cite>
                             </small>
                        </footer>
                        </blockquote>
                    </Card>

                    <Card className="p-1" bg="primary" text="light">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Delivery service is safe and hygiene! Service is one of the best!
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-white">
                                  Vignesh, <cite title="Source Title">Student</cite>
                             </small>
                        </footer>
                        </blockquote>
                    </Card>
                    <Card className="p-5">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            True to their word! Regional cuisine options are best! 
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                  Yogesh, <cite title="Source Title">YouTuber</cite>
                             </small>
                        </footer>
                        </blockquote>
                    </Card>
                    <Card className="p-4" bg="danger" text="light">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            No words! Simply awesome and superb! eagerly waiting to taste many more.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-light">
                                  Sravan, <cite title="Source Title">Full Stack Engineer</cite>
                             </small>
                        </footer>
                        </blockquote>
                    </Card>
                   
                    
                    <Card className="p-4" bg="secondary" text="light">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Best taste and alomost reminds me of my home food! Great way of remembering our tradition foods. 
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-light">
                                  Pranav, <cite title="Source Title">AI Engineer</cite>
                             </small>
                        </footer>
                        </blockquote>
                    </Card>
                    <Card className="p-5" bg="success" text="light">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Simply superb!
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-white">
                                  Hitesh, <cite title="Source Title">Student </cite>
                             </small>
                        </footer>
                        </blockquote>
                    </Card>
                    <Card className="p-2" bg="info" text="light">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Indeed the best quality and service! Great Food and tastes amazing!
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-white">
                                  Pradyoth, <cite title="Source Title">Asst. Professor</cite>
                             </small>
                        </footer>
                        </blockquote>
                    </Card>

                    </CardColumns>
                </Row>
                <Row className="justify-content-center">
                <Link to="/Home"><button className="btn btn-outline-warning mt-4 ">OrderNow</button></Link>
                </Row>

            </Container>
            
        </div>
    )
};

export default About;
