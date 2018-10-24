import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Button, Row } from 'react-bootstrap';
import Teamform from '../components/Teamform'

import './Home.css'

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      redirect: false
    }
    this.logout = this.logout.bind(this);
  }

  componentWillMount(){
    if(sessionStorage.getItem("userData")){
      console.log("Call User Feed");
    }
    else {
      this.setState({redirect: true});
    }
  }

  logout(){
    sessionStorage.setItem("userData", '');
    sessionStorage.clear();
    this.setState({redirect: true});


  }

  render(){
  /*  if(this.state.redirect){
      return(<Redirect to={'/'}/>)
    }*/
    return(
      <div>
        <Row>
          <Teamform/>
        </Row>
      </div>
    )
  }
}
