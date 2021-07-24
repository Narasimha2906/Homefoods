import React from 'react';
import{BiDish} from 'react-icons/bi';

import {Navbar, Container, Nav} from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <>
        
        <Navbar expand="lg" variant="dark" bg="dark" >
            <Container>
               <Navbar.Brand href="/"><BiDish size="2.2em"/>  HomeFoods</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav"/>
               <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="ml-auto">
                       <Nav.Link href="/Login">Log In</Nav.Link>
                       <Nav.Link href="/SignUp">Sign Up</Nav.Link>
                   </Nav>
               </Navbar.Collapse> 

            </Container>

        </Navbar>
        
        

        </>
    )
};

export default NavigationBar;
