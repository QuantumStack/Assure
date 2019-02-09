import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SignUpForm from './../components/SignUpForm';

class DonorNew extends Component {
  render() {
    return (<SignUpForm type='donor' history={this.props.history} />);
  }
}

export default withRouter(DonorNew);
