import React , {Component} from 'react';
import { Container,  Row,  Col,Button, FormLabel, FormGroup,FormText} from 'react-bootstrap';
import { Control, Form,Errors, actions } from 'react-redux-form';
import { connect } from 'react-redux';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const mapDispatchToProps = (dispatch) => {
   return{
    resetLoginForm: () => {dispatch(actions.reset('login'))}
   }
}   

class UserLogin extends Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        console.log(JSON.stringify(values));
        this.props.resetLoginForm();
    }

    render(){
        return(
            <>
                <div className="content">
                    <Container>
                        <Row className="justify-content-center p-2">
                            <Col md={4}>
                                <Form model="login" onSubmit={(values) => this.handleSubmit(values)}>
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
                                                                         
                                    <Row className="justify-content-center p-2">
                                        <Col md={3}>
                                        <Button type="submit" variant="outline-success" className="mt-2">Login</Button>
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

}

export default connect(null,mapDispatchToProps)(UserLogin);