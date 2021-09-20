import React, {Component} from 'react';
import {Container, FormGroup, Col, Button,FormLabel,Row,FormText,Card} from 'react-bootstrap';
import { Control, Form, Errors,actions } from 'react-redux-form';
import {connect} from 'react-redux';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const mapDispatchToProps = (dispatch) => {
    return{
     resetSignUpForm: () => {dispatch(actions.reset('signup'))}
    }
 } 

class UserSignUp extends Component {
   constructor(props){
       super(props);

       this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleSubmit(values){
       console.log(JSON.stringify(values));
       this.props.resetSignUpForm();
   }

    render(){
        return(
            <>
               <div className="content">
                   <Container>
                        <Row className="justify-content-center">
                            <Col md={8}>
                            <Card bg="light" >
                                <Card.Body>
                                    <Card.Title className="ml-1">3 Easy steps!</Card.Title>
                                    <Card.Text className="ml-3">
                                        <ol>
                                           <li>Sign Up by providing the required details!</li>
                                           <li>Get your account verified and get yourself a dashboard!</li>
                                           <li>Add your dishes and go live with your business!</li>
    
                                        </ol>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                        <Row className="justify-content-center mt-4">
                            
                        <Col>
                                <Form model="signup" onSubmit={(values) => this.handleSubmit(values)}>
                                    <Row className="justify-content-center">
                                        <Col md={4}>
                                        <FormGroup>
                                        <FormLabel>First Name</FormLabel>
                                        <Control.text model=".firstname" placeholder="First Name" className="form-control" name="firstname"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }}/>
                                        <Errors
                                            className="text-danger"
                                            model=".firstname"
                                            show="touched"
                                            messages={{
                                            required: 'Required!',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                            }}
                                        />    
                                        
                                        </FormGroup>
                                        </Col>
                
                                        <Col md={4}>
                                        <FormGroup  controlId="formGridLastName">
                                        <FormLabel>Last Name</FormLabel>
                                        <Control.text model=".lastname" placeholder="Last Name" className="form-control" name="lasrstname"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }}/>
                                        <Errors
                                            className="text-danger"
                                            model=".lastname"
                                            show="touched"
                                            messages={{
                                            required: 'Required!',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                            }}
                                        />    
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <Col md={4}>
                                            <FormGroup>
                                            <FormLabel>Email</FormLabel>
                                            <Control.text model=".email"  placeholder="Enter Email" className="form-control" name="email"
                                                validators={{
                                                    required, validEmail
                                                }}/>
                                            <Errors
                                                className="text-danger"
                                                model=".email"
                                                show="touched"
                                                messages={{
                                                required: 'Required!',
                                                validEmail: 'Invalid Email Address!'
                                                }}
                                            />    
                                            </FormGroup>
                                        </Col>
                
                                        <Col md={4}>
                                            <FormGroup  controlId="formGridPassword">
                                            <FormLabel>Password</FormLabel>
                                            <Control type="password" model=".password" placeholder="Password" className="form-control" name="password"
                                                validators={{
                                                    required, minLength: minLength(4), maxLength: maxLength(15)
                                                }}/>
                                            <Errors
                                                className="text-danger"
                                                model=".password"
                                                show="touched"
                                                messages={{
                                                required: 'Required!',
                                                minLength: 'Must be greater than 3 characters!',
                                                maxLength: 'Must be 15 characters or less!'
                                                }}
                                            />    
                                            <FormText muted>* Password must contain atleast 4 characters!</FormText>
            
                                            </FormGroup>
                                        </Col>
                                    </Row>
                
                                    <Row className="justify-content-center">
                                        <Col md={8}>
                                            <FormGroup controlId="formGridAddress1" >
                                            <FormLabel>Pickup Address</FormLabel>
                                            <Control.text model=".addressline1" placeholder="1234 Main St" className="form-control" name="addressline1" 
                                                validators={{
                                                    required, minLength: minLength(6), maxLength: maxLength(40)
                                                }}/>
                                            <Errors
                                                    className="text-danger"
                                                    model=".addressline1"
                                                    show="touched"
                                                    messages={{
                                                    required: 'Required!',
                                                    minLength: 'Must be greater than 5 characters!',
                                                    maxLength: 'Must be 40 characters or less!'
                                                    }}
                                                />
                                            <FormText muted>* This will be the default pickup address!
                                            </FormText>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                
                                    <Row className="justify-content-center">
                                        <Col md={8}>
                                            <FormGroup controlId="formGridAddress2">
                                            <FormLabel>Pickup Address line 2</FormLabel>
                                            <Control.text model=".addressline2" placeholder="Apartment, studio, or floor" className="form-control" name="addressline2"/>
                                                
                                            </FormGroup>
                                        </Col>
                                    </Row>
                
                                    <Row className="justify-content-center">
                                        <Col md={3}>
                                            <FormGroup controlId="formGridCity">
                                            <FormLabel>City</FormLabel>
                                            <Control.text model=".city" value="Bangalore" className="form-control" name="city" disabled/>
                                            </FormGroup>
                                            </Col>
                    
                                            <Col md={3}>
                                            <FormGroup  controlId="formGridState">
                                            <FormLabel>State</FormLabel>
                                            <Control.text model=".state" value="Karnataka" className="form-control" disabled />
                                                
                                                
                                            
                                            </FormGroup>
                                        </Col>
                
                                        <Col md={2}>
                                            <FormGroup  controlId="formGridZip">
                                            <FormLabel>Zip</FormLabel>
                                            <Control.text model=".zip" name="zip" className="form-control"
                                                validators={{
                                                    required, minLength: minLength(6), maxLength: maxLength(6),isNumber
                                                }}/>
                                            <Errors
                                                    className="text-danger"
                                                    model=".zip"
                                                    show="touched"
                                                    messages={{
                                                    required: 'Required!',
                                                    minLength: 'Must be 6-digit pincode!',
                                                    maxLength: 'Must be 6-digit pincode!',
                                                    isNumber: 'Must be a Number'
                                                    }}
                                                />
                                        </FormGroup>
                                        </Col>
                                    </Row>
                
                                    <Row className="justify-content-center">
                                        <Col md={4}>
                                            <FormGroup  controlId="formGridtel">
                                            <FormLabel>Contact No.</FormLabel>
                                            <Control.text model=".telnum" placeholder="Contact No." className="form-control" name="contactno."
                                                validators={{
                                                    required, minLength: minLength(3), maxLength: maxLength(15),isNumber
                                                }}/>
                                            <Errors
                                                    className="text-danger"
                                                    model=".telnum"
                                                    show="touched"
                                                    messages={{
                                                    required: 'Required!',
                                                    minLength: 'Must be 10-digit number',
                                                    maxLength: 'Must be 10-digit number',
                                                    isNumber:'Must be a Number'
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                
                                        <Col md={4}>
                                            <FormGroup  controlId="formGridtel">
                                            <FormLabel>Alternate No.</FormLabel>
                                            <Control.text model=".telnum2" placeholder="Alternate No." className="form-control" name="alternateno."
                                                validators={{
                                                    required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                                }}/>
                                            <Errors
                                                    className="text-danger"
                                                    model=".telnum2"
                                                    show="touched"
                                                    messages={{
                                                    required: 'Required!',
                                                    minLength: 'Must be 10-digit number',
                                                    maxLength: 'Must be 10-digit number',
                                                    isNumber: 'Must be a Number'
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                
                                
                                    <Row className="justify-content-center p-2">
                                        <Col md={1}>
                                        <Button variant="outline-success" type="submit">
                                            Submit
                                        </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
               </div> 
            </>
    
        )
    }

    
    
};

export default connect(null,mapDispatchToProps)(UserSignUp);