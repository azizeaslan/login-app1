
import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import "./App.css";
//import "./style/menu.css";
import "./login.css"
import { Container,Row,Col,Form,Button,Card } from "react-bootstrap";
import LoginIcon from '../../images/Vector.svg';
import LoginIcon2 from '../../images/Vector2.svg';
import AlfaClinic from '../../images/AlfaClinic.svg';
//import './components/Login/Login.css';
import viImg from'../../images/login.svg';
const Login =() => {
  return (
  <>
  <Container className="mt-5">
                <Row >

                <Col lg={6} md={6} sm={12}>
                      <img className="w-100" src={viImg} alt="" />
                    </Col>
                    

                    <Col lg={6} md={6} sm={12} className="text-center">
                   <img className="icon-img" src={LoginIcon} alt="" /> 
                   <img className="icon-img" src={LoginIcon2} alt="" />
                    <img className="icon-img" src={AlfaClinic} alt="" />
                   <Card>
                    <Card.Body>
                    
                      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h3 className="strongText">Welcome</h3>
        <Form.Control className="mt-3 input" type="phone" placeholder="Phone Number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicpassword">
        <Form.Control  className="input" type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check className="checkbox" type="checkbox" label="Keep me logged in" />
      </Form.Group>
      
      <Button className="btn-primary" type="submit" label="Login" >
        Log in 
      </Button>
    </Form>
    </Card.Body>
   </Card>
    </Col>
                   
                </Row>

            </Container>
       
        </>
    
  );
}

export default Login;
