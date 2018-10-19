import React, { Component } from "react";
import { Modal, Button, Tabs, Tab } from 'react-bootstrap';
import Login from  './Login';
import SignUp from './SignUp'

export default class Popups extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {

    return (
      <div>
        <p>Click to get the full Modal experience!</p>

        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Login
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Access your BallC account!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Log in">
                <Login />
              </Tab>
              <Tab eventKey={2} title="Sign up">
                <SignUp />
              </Tab>
            </Tabs>


          </Modal.Body>
          <Modal.Footer>
            <p>Thank you for using our site!</p>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
