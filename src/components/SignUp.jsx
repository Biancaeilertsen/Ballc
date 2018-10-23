import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import axios from 'axios'

class Login extends React.Component  {


  render() {
    return(
      <Container>
        <Row>
          <Col md="6">
            <form>
              <p className="h5 text-center mb-4">Sign up</p>
              <br/>
              <div className="grey-text">
                <p>Username:</p>
                <Input name="name" group type="text" validate error="wrong" placeholder="Username" success="right"/>
                <p>Email:</p>
                <Input name="email" group type="email" validate error="wrong" placeholder="Email" success="right"/>
                <p>Confirm Email:</p>
                <Input name="confemail" group type="text" validate error="wrong" placeholder="Email" success="right"/>
                <p>Password:</p>
                <Input  name="password" group type="password" placeholder="Password" validate/>
                <p>Confirm password:</p>
                <Input  name="confpassword" group type="password" placeholder="Password" validate/>

              </div>
              <div className="text-center">
                <Button color="primary" type="submit">Register</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Login;
