import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL, GOOGLE_API_KEY, CATEGORIES } from './../util/constants';

class DonorItemNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      lastName: '',
      category: CATEGORIES[0],
      pictures: []
    };
    this.onFileChange = this.onFileChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onFileChange(e) {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      if (!f.type.match('image.*')) return;

      const reader = new FileReader();
      reader.onload = ((file) => {
        return (e) => {
          this.setState(({ pictures }) => {
            pictures.push({
              type: f.type,
              data: e.target.result
            });
            return { pictures };
          });
        };
      })(f);

      reader.readAsDataURL(f);
    }
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { location } = this.state;
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${GOOGLE_API_KEY}`)
    .then((res) => {
      if (res.data && res.data.results && res.data.results.length > 0) {
        const { lat, lng } =res.data.results[0].geometry.location;
        const coords = [lng, lat];
        axios.post(`${API_URL}/donor/item/new`, {
          id: localStorage.getItem('donor_id'),
          ...this.state,
          location: coords,
        }).then((res) => this.props.history.push('/donor'))
        .catch(() => this.props.history.push('/error'));
      } else throw new Error('Not found');
    }).catch(() => {});
  }

  render() {
    const { pictures } = this.state;
    return (
      <div className='columns'>
        <div className='column is-4 is-offset-4'>
          <form onSubmit={this.onSubmit}>
            <div className='field'>
              <label className='label'>Name</label>
              <div className='control'>
                <input className='input' name='name' type='text' placeholder='Tinder Gold Subscription' onChange={this.handleInputChange} required />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Description</label>
              <div className='control'>
                <textarea className='textarea' name='description' placeholder='Give some details about the item' onChange={this.handleInputChange}></textarea>
              </div>
            </div>
            <div className='field'>
              <label className='label'>Location</label>
              <div className='control'>
                <input className='input' name='location' type='text' placeholder='123 Amazing St, Pittsburgh, PA' onChange={this.handleInputChange} required />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Pictures</label>
              <div className='control'>
                <div className='file has-name'>
                  <label className='file-label'>
                    <input className='file-input' type='file' accept="image/*" name='pictures' onChange={this.onFileChange} />
                    <span className='file-cta'>
                      <span className='file-icon'>
                        <i className='fas fa-upload'></i>
                      </span>
                      <span className='file-label'>
                        Choose a file…
                      </span>
                    </span>
                    <span className='file-name'>
                      {pictures.length} files selected
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className='field'>
              <label className='label'>Category</label>
              <div className='control'>
                <div className='select'>
                  <select name='category' onChange={this.handleInputChange}>
                    {CATEGORIES.map(cat => (
                      <option name={cat} key={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className='field is-grouped'>
              <div className='control'>
                <button className='button is-link'>Submit</button>
              </div>
              <div className='control'>
                <Link to='/donor' className='button is-text'>Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(DonorItemNew);
