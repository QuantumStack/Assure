import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Message from './Message';
import { API_URL } from './../util/constants';
import axios from 'axios';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      chat: null,
      message: '',
      isConnected: false,
    };
    this.onMessageChange = this.onMessageChange.bind(this);
    this.send = this.send.bind(this);
    this.unavailable = this.unavailable.bind(this);
    this.socketConnect = this.socketConnect.bind(this);
  }

  onMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  send() {
    const { message } = this.state;
    if (message) {
      const { type } = this.props;
      const messageObj = {
        message,
        [`${type}_id`]: localStorage.getItem(`${type}_id`),
        timestamp: Date.now(),
      };
      this.socket.send(JSON.stringify({
        id: this.state.chat._id,
        ...messageObj,
      }));
    }
  }

  unavailable() {
    axios.post(`${API_URL}/donor/item/unavailable`, {
      id: localStorage.getItem('donor_id'),
      itemId: this.state.chat.item_id,
      userId: this.state.chat.user[0]._id,
    }).then(() => this.props.history.push('/donor'))
    .catch(() => this.props.history.push('/error'));
  }

  socketConnect() {
    this.socket = new WebSocket('ws://localhost:40510/', "protocolOne");
    this.socket.onopen = () => this.setState({ isConnected: true });
    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.id === this.state.chat._id) {
        this.setState(({ chat }) => {
          chat.messages.push(message);
          return { chat, message: '' };
        });
      }
    }
  }

  componentDidMount() {
    axios.get(`${API_URL}/chat`, {
      params: {
        id: this.props.id,
      }
    }).then((res) => {
      this.setState({ isLoaded: true, chat: res.data });
      this.socketConnect();
    }).catch(() => this.props.history.push('/error'));
  }

  render() {
    const { type } = this.props;
    const { isLoaded, chat, message, isConnected } = this.state;
    if (!isLoaded) return <div className='has-text-centered'>Loading...</div>
    return (
      <div className='columns'>
        <div className='column is-4 is-offset-4'>
          {type === 'donor' &&
            <div>
              <Link to={`/donor/item/${chat.item_id}`} className='is-pulled-left button is-rounded'>
                <span className='icon is-small'>
                  <i className='fas fa-arrow-left'></i>
                </span>
              </Link>
              <button className='is-pulled-right button is-rounded' onClick={this.unavailable}>
                <span className='icon is-small'>
                  <i className='fas fa-check'></i>
                </span>
              </button>
              <h4 className='title is-4 has-text-centered'>Talking to {chat.user[0].firstName}</h4>
            </div>
          }
          {type === 'user' &&
            <div>
              <Link to={`/user/chats`} className='is-pulled-left button is-rounded'>
                <span className='icon is-small'>
                  <i className='fas fa-arrow-left'></i>
                </span>
              </Link>
              <h4 className='title is-4 has-text-centered'>Talking to {chat.donor[0].firstName}</h4>
            </div>
          }
          <br />

          <div style={{maxHeight: '80%', overflowY: 'scroll'}}>
            {chat.messages.map((msg, i) => (
              <Message key={i} {...msg} type={type} user={chat.user} donor={chat.donor} />
            ))}
          </div>
          <br />
          <div className='field has-addons'>
              <div className='control is-expanded'>
                <input className='input' type='text' value={message} placeholder='Type a message' onChange={this.onMessageChange} required />
              </div>
              <div className='control'>
                <button className='button is-info' onClick={this.send}>
                  <span className='icon is-small'>
                    <i className='fas fa-paper-plane'></i>
                  </span>
                </button>
              </div>
          </div>
          {!isConnected && <p className='help is-danger'>Waiting to connect...</p>}
        </div>
      </div>
    );
  }
}

export default withRouter(Chat);
