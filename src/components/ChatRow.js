import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class ChatRow extends Component {
  render() {
    const { _id, itemName, firstName, lastMessage, type } = this.props;
    return (
      <Link to={`/${type}/chat/${_id}`} className='media'>
        <div className='media-content'>
          <div className='content'>
            {itemName &&
              <span className='title is-5'>{itemName}</span>
            }
            <p>
              <small>{moment(lastMessage.timestamp).fromNow()}</small>
              &nbsp;
              <span>{lastMessage.message}</span>
            </p>
          </div>
        </div>
        <div className='media-right'>
          <span className='tag is-large is-rounded'>{firstName}</span>
        </div>
      </Link>
    );
  }
}

export default ChatRow;
