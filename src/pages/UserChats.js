import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ChatRow from './../components/ChatRow';
import Nothing from './../components/Nothing';
import axios from 'axios';
import { API_URL } from './../util/constants';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      chats: [],
    };
  }

  componentDidMount() {
    axios.get(`${API_URL}/user/chats`, {
      params: {
        id: localStorage.getItem('user_id'),
      },
    }).then((res) => this.setState({ isLoaded: true, chats: res.data }))
    .catch(() => this.setState({ isLoaded: true }));
  }

  render() {
    const { isLoaded, chats } = this.state;
    return (
      <div className='columns'>
        <div className='column is-6 is-offset-3'>
          <Link to='/user' className='is-pulled-left button is-rounded'>
            <span className='icon is-small'>
              <i className='fas fa-arrow-left'></i>
            </span>
          </Link>
       		<h4 className='title is-4 has-text-centered'>Messages</h4>

          {!isLoaded && <div>Loading...</div>}
          {chats.map(chat => (
            <ChatRow {...chat} key={chat._id} type='user' />
          ))}
	        {isLoaded && !chats.length && <Nothing />}
        </div>
      </div>
    );
  }
}

export default User;
