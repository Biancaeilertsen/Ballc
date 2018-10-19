import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';

class Login extends React.Component  {

  constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        name: ''
      }
    }

    onNameChange = (event) => {
      this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
      this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
      this.setState({password: event.target.value})
    }

    onSubmitSignIn = () => {
      fetch('heds.herokuapp.com', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          name: this.state.name
        })
      })
        .then(response => response.json())
        .then(user => {
          if (user.id) {
            this.props.loadUser(user)
            this.props.onRouteChange('home');
          }
        })
    }

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
                <Input name="name" group type="text" validate error="wrong" success="right"/>
                <p>Email:</p>
                <Input name="email" group type="email" validate error="wrong" success="right"/>
                <p>Confirm Email:</p>
                <Input name="confemail" group type="text" validate error="wrong" success="right"/>
                <p>Password:</p>
                <Input  name="password" group type="password" validate/>
                <p>Confirm password:</p>
                <Input  name="confpassword" group type="password" validate/>

              </div>
              <div className="text-center">
                <Button onClick={this.onSubmitSignIn} color="primary" type="submit">Register</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Login;
