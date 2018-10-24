import React from 'react';
import { Formgroup, Formcontrol } from 'react-bootstrap';
import { Container, Row, Col, Input, Button } from 'mdbreact';

export default class Teamform extends React.Component  {
//REMEBER TO PUT A <ROW> INFRONT OF THE CALL, PLS
  render() {
    return(
      <Container>
        <Col md="6">
          <form>
            <p className="h5 text-center mb-4">CREATE A TEAM</p>
            <br/>
            <div className="grey-text">
              <label>Team name</label>
              <Input
                name="teamname"
                group type="text"
                placeholder="Team name"
                onChange={this.onChange}
              success="right"/>
              <hr/>
              <label>Association</label>
              <p>Association name</p>
              <Input
                name="association"
                group type="text"
                placeholder="Association"
                onChange={this.onChange}
              success="right"/>

              <p>Description</p>
              <Input
                name="ass_description"
                group type="text"
                placeholder="Location"
                onChange={this.onChange}
              success="right"/>
              <hr/>
              <label>Location</label>
              <p>Location name</p>
              <Input
                name="location"
                group type="text"
                placeholder="Location"
                onChange={this.onChange}
              success="right"/>

              <p>Description</p>
              <Input
                name="loc_description"
                group type="text"
                placeholder="Location"
                onChange={this.onChange}
              success="right"/>

              <p>Address</p>
              <Input
                name="address"
                group type="text"
                placeholder="Location"
                onChange={this.onChange}
              success="right"/>
              <hr/>


              <label>Coach</label>
              <Input
                name="coach"
                group type="text"
                placeholder="Coach"
                onChange={this.onChange}
              success="right"/>

              
              <label>Owner</label>
              <Input
                name="owner"
                group type="text"
                placeholder="Owner"
                onChange={this.onChange}
              success="right"/>

            </div>
            <div className="text-center">
              <Button color="primary" onClick={this.submitHandler} type="submit">Save team</Button>
            </div>
          </form>
        </Col>
      </Container>
    );
  }
};
