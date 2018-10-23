import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import {PostData} from '../PostData';

class Login extends React.Component  {

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      email:'',
      error:'',
      redirect: false
    }
    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  signup(){
    if(this.state.password === this.state.confpassword){
      if(this.state.username && this.state.password &&  this.state.email){
        console.log("Signup function");
        PostData('users', this.state).then ((result) => {
          let responseJSON = result;
          if(responseJSON.userdata){
            sessionStorage.setItem('userData',responseJSON );
            this.setState({redirect: true});
          }
          else {
            console.log("Login error");
          }
        });
      }
      else{
        console.log('Make sure to fill out all the fields!');
      }
    }
    else{
        console.log('Make sure your passwords match!');    }
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state);
  }




  render() {

  /*  if(this.state.redirect){
      return(<Redirect to={'/teams'}/>)
    }

    if(sessionStorage.getItem("userData")){
      return(<Redirect to={'/teams'}/>)
    }*/

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
                  onChange={this.onChange}
                success="right"/>

                <p>Email:</p>
                <Input
                  name="email"
                  group type="email"
                  validate error="wrong"
                  placeholder="Email"
                  onChange={this.onChange}
                success="right"/>

                <p>Password:</p>
                <Input
                  name="password"
                  group type="password"
                  placeholder="Password"
                  onChange={this.onChange}
                validate/>

                <p>Confirm password:</p>
                <Input
                  name="confpassword"
                  group type="password"
                  placeholder="Password"
                  onChange={this.onChange}
                validate/>

                <p name="error"></p>

              </div>
              <div className="text-center">
                <Button color="primary" onClick={this.signup} type="submit">Register</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Login;
