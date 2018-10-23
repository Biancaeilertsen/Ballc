import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import {PostData} from '../PostData';

class Login extends React.Component  {

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      redirect: false
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login(){
    if(this.state.username && this.state.password){
      console.log("Login function");
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
              <h1 className="h5 text-center mb-4">Log in</h1>
              <br/>
              <div className="grey-text">
                <p>Username:</p>
                <Input
                  name="username"
                  group type="username"
                  validate error="wrong"
                  success="right"
                  onChange={this.onChange}/>
                <p> Password: </p>
                <Input
                  name="password"
                  group type="password"
                  onChange={this.onChange}
                validate/>
              </div>
              <div className="text-center">
                <Button color="primary" onClick={this.login} >Login</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Login;
