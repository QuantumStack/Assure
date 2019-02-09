import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className='has-text-centered'>
        <h4 className='title is-4'>
          Welcome to Assure!
        </h4>
        <Link to='/user/new' className='button is-primary is-rounded'>I'm in need</Link>
        &nbsp;&nbsp;
        <Link to='/donor/new' className='button is-rounded'>Let me help</Link>
        <br /><br />
        <Link to='/user' className='button is-info is-rounded'>Already signed up?</Link>
      </div>
    );
  }
}

export default Home;
