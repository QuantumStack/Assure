import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SignUpForm from './../components/SignUpForm';

class UserNew extends Component {
  render() {
    return (<SignUpForm type='user' history={this.props.history} />);
  }
}

export default withRouter(UserNew);
