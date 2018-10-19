import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';

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
                <p>Name:</p>
                <Input icon="user" group type="text" validate error="wrong" success="right"/>
                <p>Email:</p>
                <Input icon="envelope" group type="email" validate error="wrong" success="right"/>
                <p>Confirm Email:</p>
                <Input icon="exclamation-triangle" group type="text" validate error="wrong" success="right"/>
                <p>Password:</p>
                <Input icon="lock" group type="password" validate/>
                <p>Confirm password:</p>
                <Input icon="exclamation-triangle" group type="password" validate/>

              </div>
              <div className="text-center">
                <Button color="primary">Register</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Login;
