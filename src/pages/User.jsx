import React,  { Component } from 'react';
import Personlist from '../components/Personlist';
import PersonInput from '../components/PersonInput';

export default class User extends Component {
/*  state = {
      fields: {}
    };

    onChange = updatedValue => {
      this.setState({
        fields: {
          ...this.state.fields,
          ...updatedValue
        }
      });
    };

    render() {
      return (
        <div className="App">
          <Form onChange={fields => this.onChange(fields)} />
          <p>
            {JSON.stringify(this.state.fields, null, 2)}
          </p>
        </div>
      );
    }*/
    render(){
      return(
        <div>
          <PersonInput />
          <Personlist/>
        </div>
      )
    }
  }
