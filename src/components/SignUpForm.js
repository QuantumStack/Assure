import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from './../util/constants';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { type } = this.props;
    // TODO: actual authentication
    axios.post(`${API_URL}/${type}/new`, this.state)
    .then((res) => {
      localStorage.setItem(`${type}_id`, this.state.email);
      this.props.history.push(`/${type}`);
    }).catch(() => this.props.history.push('/error'));
  }

  render() {
    return (
      <div className='columns'>
        <div className='column is-4 is-offset-4'>
          <form onSubmit={this.onSubmit}>
            <div className='field'>
              <label className='label'>Email</label>
              <div className='control'>
                <input className='input' name='email' type='text' placeholder='janedoe@example.com' onChange={this.handleInputChange} required />
              </div>
            </div>
            <div className='field'>
              <label className='label'>First Name</label>
              <div className='control'>
                <input className='input' name='firstName' type='text' placeholder='Jane' onChange={this.handleInputChange} required />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Last Name</label>
              <div className='control'>
                <input className='input' name='lastName' type='text' placeholder='Doe' onChange={this.handleInputChange} required />
              </div>
            </div>
            <div className='field is-grouped'>
              <div className='control'>
                <button className='button is-link'>Submit</button>
              </div>
              <div className='control'>
                <Link to='/' className='button is-text'>Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
