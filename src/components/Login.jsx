import React from 'react';
import { Container, Row, Col, Button } from 'mdbreact';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

class Login extends React.Component  {
  render() {
    return(
      <Container>
        <Row>
          <Col md="6">
            <form>
              <h1 className="h5 text-center mb-4">Log in</h1>
              <br/>
              <div className="grey-text">
                <p>Email:</p>
                <Input  leftIcon={{ type: 'font-awesome', name: 'chevron-left' }} group type="email" validate error="wrong" success="right"/>
                <p> Password: </p>
                <Input  icon="lock" group type="password" validate/>
              </div>
              <div className="text-center">
                <Button color="primary">Login</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Login;
