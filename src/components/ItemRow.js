import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { API_URL } from './../util/constants';
import axios from 'axios';

class ItemRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAvailable: this.props.available,
    }
    this.unavailable = this.unavailable.bind(this);
  }

  unavailable() {
    axios.post(`${API_URL}/donor/item/unavailable`, {
      id: localStorage.getItem('donor_id'),
      itemId: this.props._id,
    }).then(() => this.setState({ isAvailable: false }))
    .catch(() => this.props.history.push('/error'));
  }

  render() {
    const { _id, name, description, pictures, count } = this.props;
    const { isAvailable } = this.state;
    if (!isAvailable) return null;
    return (
      <article className='media'>
        {pictures.length > 0 &&
          <figure className='media-left'>
            <p className='image is-64x64'>
              <img src={API_URL + pictures[0].slice(6)} alt='' />
            </p>
          </figure>
        }
        <div className='media-content'>
          <div className='content'>
            <p>
              <strong>{name}</strong>
              <br />
              {description.slice(0, 100)}
            </p>
          </div>
        </div>
        <div className='media-right'>
          {count > 0 &&
            <Link to={`/donor/item/${_id}`} className='tag is-info'>{count} requests</Link>
          }
          &nbsp;
          <button className='delete' onClick={this.unavailable}></button>
        </div>
      </article>
    );
  }
}

export default withRouter(ItemRow);
