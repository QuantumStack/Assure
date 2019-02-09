import React, { Component } from 'react';
import moment from 'moment';

class Message extends Component {
  render() {
    const { timestamp, message, sender_type, type, user, donor } = this.props;
    const nametag = (
      <p className='control'>
        <span className={`tag is-rounded is-${sender_type === 'donor' ? 'info' : 'success'}`}>
          {(sender_type === 'donor' ? donor : user)[0].firstName.charAt(0).toUpperCase()}
        </span>
      </p>
    );
    const box = (
      <p className='control'>
        <span className='tag is-medium' style={{ maxWidth: 200, overflowX: 'scroll' }}>
          {message}
        </span>
        <span className='help'>{moment(timestamp).fromNow()}</span>
      </p>
    );
    return sender_type === type ? (
      <div className='field is-grouped is-grouped-right'>
        {box}
        {nametag}
      </div>
    ) : (
      <div className='field is-grouped'>
        {nametag}
        {box}
      </div>
    );
  }
}

export default Message;
