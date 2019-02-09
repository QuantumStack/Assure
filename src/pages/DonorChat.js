import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Chat from './../components/Chat';

class DonorChat extends Component {
  render() {
    return <Chat id={this.props.match.params.id} type='donor' />
  }
}

export default withRouter(DonorChat);
