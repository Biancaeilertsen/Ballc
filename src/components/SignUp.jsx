import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';

class Login extends React.Component  {

identifier = 0;

constructor(){
  super();
  this.state = {
    user:{
      username:'',
      email:'',
      password:''
    },
  }
}


  inputHandler = (event)  =>{
    const name= event.target.name;
    const value = event.target.value;
    let user = Object.assign({}, this.state.user);
    if( name === 'username'){
      user.username = value;
      this.setState({user});
      console.log(this.state);
    }
    else if(name === 'email'){
      user.email = value;
      this.setState({user});
      console.log(this.state);

    }
    else if(name === 'password'){
      user.password = value;
      this.setState({user});
      console.log(this.state);
    }
  }

  submitHandler = () => {
    let data = {
      username: this.state.user.username,
      email: this.state.user.email,
      password: this.state.user.password,

    }


    fetch('https://ballc-frontend-be.herokuapp.com/user', {
      method:'POST',
      mode: 'no-cors',
      body:JSON.stringify(data)
    })
    .then(response => response);
    console.log("We've tried sending your info")
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
                <Input
                  name="username"
                  group type="text"
                  validate error="wrong"
                  placeholder="Username"
                  onChange={this.inputHandler}
                success="right"/>

                <p>Email:</p>
                <Input
                  name="email"
                  group type="email"
                  validate error="wrong"
                  placeholder="Email"
                  onChange={this.inputHandler}
                success="right"/>

                <p>Password:</p>
                <Input
                  name="password"
                  group type="password"
                  placeholder="Password"
                  onChange={this.inputHandler}
                validate/>

                <p>Confirm password:</p>
                <Input
                  name="confpassword"
                  group type="password"
                  placeholder="Password"
                validate/>

                <p name="error"></p>

              </div>
              <div className="text-center">
                <Button color="primary" onClick={this.submitHandler} type="submit">Register</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Login;
