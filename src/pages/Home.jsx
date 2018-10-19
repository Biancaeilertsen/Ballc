import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Button } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
  render(){
    return(
      <Grid>
        <Jumbotron>
          <h2> THIS IS A TEST FOR REACT </h2>
          <p> SITE WILL BE USED FOR THE CASE PROJECT BALLC </p>
          <Link to="/Teams">
            <Button bsStyle="primary"> CHECK OUT OUR TEAMS</Button>
          </Link>
        </Jumbotron>
      </Grid>
    )
  }
}
