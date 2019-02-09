import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { API_URL } from './../util/constants';
import axios from 'axios';

class ItemsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false,
      message: '',
      picIndex: 0,
    };
    this.nextImage = this.nextImage.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.ask = this.ask.bind(this);
    this.blacklist = this.blacklist.bind(this);
  }

  nextImage() {
    this.setState(({ picIndex }) => {
      return { picIndex: picIndex === this.props.pictures.length ? 0 : picIndex + 1 };
    })
  }

  toggleModal() {
    this.setState(({ modalActive }) => ({ modalActive: !modalActive }));
  }

  onMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  ask() {
    const { message } = this.state;
    if (message) {
      this.toggleModal();
      axios.post(`${API_URL}/user/ask`, {
        id: localStorage.getItem('user_id'),
        itemId: this.props._id,
        message,
      }).then(this.props.next).catch(() => this.props.history.push('/error'));
    }
  }

  blacklist() {
    console.log('hello');
    axios.post(`${API_URL}/user/blacklist`, {
      id: localStorage.getItem('user_id'),
      itemId: this.props._id,
    }).then(this.props.next).catch(() => this.props.history.push('/error'));
  }

  render() {
    const { name, description, pictures, next } = this.props;
    const { modalActive, picIndex } = this.state;
    return (
      <div>
        <div className='box'>
          <h4 className='title is-4'>{name}</h4>
          <h6 className='subtitle is-6'>{description}</h6>
          <figure className='media-left' >
            <p className='image'>
              <img src={pictures[picIndex]} alt='' />
            </p>
          </figure>
          <div className='field is-grouped is-grouped-centered'>
            <p className='control'>
              <button className='button is-rounded' onClick={this.toggleModal}>
                <span className='icon is-small'>
                  <i className='fas fa-heart'></i>
                </span>
              </button>
            </p>
            <p className='control'>
              <button className='button is-rounded' onClick={this.blacklist}>
                <span className='icon is-small'>
                  <i className='fas fa-times'></i>
                </span>
              </button>
            </p>
            <p className='control'>
              <button className='button is-rounded' onClick={next}>
                <span className='icon is-small'>
                  <i className='fas fa-arrow-right'></i>
                </span>
              </button>
            </p>
          </div>
        </div>
        <div className={`modal ${modalActive ? 'is-active' : ''}`}>
          <div className='modal-background'></div>
          <div className='modal-content'>
            <div className='box'>
              <h5 className='title is-5'>Ask for {name}</h5>
              <div className='field'>
                <label className='label'>Message to donor</label>
                <div className='control'>
                  <textarea className='textarea' onChange={this.onMessageChange}></textarea>
                </div>
                <p className='help'>Include informaton about availability and location.</p>
              </div>
              <div className='field is-grouped'>
                <div className='control'>
                  <button className='button is-link' onClick={this.ask}>Send</button>
                </div>
                <div className='control'>
                  <button className='button is-text' onClick={this.toggleModal}>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ItemsContainer);
