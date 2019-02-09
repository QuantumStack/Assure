import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import ChatRow from './../components/ChatRow';
import axios from 'axios';
import { API_URL } from './../util/constants';

class DonorItemChats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      chats: []
    }
  }

  componentDidMount() {
    axios.get(`${API_URL}/donor/item/chats`, {
      params: {
        id: localStorage.getItem('donor_id'),
        itemId: this.props.match.params.id,
      },
    }).then((res) => this.setState({ isLoaded: true, chats: res.data }))
    .catch(() => this.setState({ isLoaded: true }));
  }

  render() {
    const { isLoaded, chats } = this.state;
    return (
      <div className='columns'>
        <div className='column is-4 is-offset-4'>
          <Link to='/donor' className='is-pulled-left button is-rounded'>
            <span className='icon is-small'>
              <i className='fas fa-arrow-left'></i>
            </span>
          </Link>
          <h4 className='title is-4 has-text-centered'>Messages for item</h4>

          {!isLoaded && <div>Loading...</div>}
          {chats.map(chat => (
            <ChatRow {...chat} key={chat._id} type='donor' />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(DonorItemChats);
