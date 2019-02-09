import React, { Component } from 'react';

class Nothing extends Component {
  render() {
    return (
      <div className='message is-danger'>
        <div className='message-body'>
          <span>There's nothing here</span>
          &nbsp;
          <span className='icon is-small'>
            <i className='fas fa-frown'></i>
          </span>
        </div>
      </div>
    );
  }
}

export default Nothing;
