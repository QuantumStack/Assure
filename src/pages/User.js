import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryFilter from './../components/CategoryFilter';
import ItemsContainer from './../components/ItemsContainer';
import Nothing from './../components/Nothing';
import axios from 'axios';
import { API_URL, CATEGORIES } from './../util/constants';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      categories: CATEGORIES.slice(0),
      range: 5,
      location: null,
      filterActive: false,
      page: 1,
    };
    this.toggleFilter = this.toggleFilter.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.changeRange = this.changeRange.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.getItems = this.getItems.bind(this);
  }

  toggleFilter() {
    this.setState(({ filterActive }) => ({
      filterActive: !filterActive
    }), () => {
      if (!this.state.filterActive) this.getItems();
    });
  }

  onCategoryChange(e) {
    const { name, checked } = e.target;
    this.setState(({ categories }) => {
      if (checked) {
        categories.push(name);
      } else {
        const i = this.state.categories.indexOf(name);
        categories.splice(i, 1);
      }
      return { categories };
    });
  }

  changeRange() {
    this.setState(({ range }) => ({ range: range % 25 + 5 }), this.getItems);
  }

  nextPage() {
    this.setState(({ page }) => ({ page: page + 1 }), this.getItems);
  }

  getItems() {
    const { categories, range, location, page } = this.state;
    axios.get(`${API_URL}/user/items`, {
      params: {
        id: localStorage.getItem('user_id'),
        range,
        categories,
        location,
        page,
      }
    }).then((res) => this.setState({ isLoaded: true, items: res.data }))
    .catch(() => this.setState({ isLoaded: true }));
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      this.setState({
        location: [coords.longitude, coords.latitude]
      }, this.getItems);
    });
  }

  render() {
    const { isLoaded, items, categories, range, filterActive } = this.state;
    return (
      <div className='columns'>
        <div className='column is-6 is-offset-3'>
          <CategoryFilter toggle={this.toggleFilter} isActive={filterActive} onChange={this.onCategoryChange} categories={categories} />
          <div className='field is-grouped'>
            <p className='control is-expanded'>
              <button className='button is-rounded is-fullwidth' onClick={this.toggleFilter}>Filter categories</button>
            </p>
            <p className='control is-expanded'>
              <button className='button is-rounded is-fullwidth' onClick={this.changeRange}>Travel up to {range} mi</button>
            </p>
            <p className='control'>
              <Link to='/user/chats' className='button is-info is-rounded'>
                <span className='icon is-small'>
                  <i className='fas fa-comments'></i>
                </span>
              </Link>
            </p>
          </div>
          {!isLoaded && <div>Loading...</div>}
          <ItemsContainer items={items} nextPage={this.nextPage} />
          {isLoaded && !items.length && <Nothing />}
        </div>
      </div>
    );
  }
}

export default User;
