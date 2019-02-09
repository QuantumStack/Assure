import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ItemRow from './../components/ItemRow';
import Nothing from './../components/Nothing';
import axios from 'axios';
import { API_URL } from './../util/constants'

class Donor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			items: [],
		}
	}

	componentDidMount() {
		axios.get(`${API_URL}/donor/items`, {
			params: {
				id: localStorage.getItem('donor_id'),
			},
		}).then((res) => this.setState({ isLoaded: true, items: res.data }))
		.catch(() => this.setState({ isLoaded: true }));
	}

  render() {
  	const { isLoaded, items } = this.state;
    return (
    	<div className='columns'>
    	  <div className='column is-4 is-offset-4'>
	    	  <Link to='/donor/item/new' className='is-pulled-left button is-rounded'>
	    	    <span className='icon is-small'>
	    	      <i className='fas fa-plus'></i>
	    	    </span>
	    	  </Link>
    	  	<h4 className='title is-4 has-text-centered'>My items</h4>

		      {!isLoaded && <div>Loading...</div>}
		      {items.map(item => (
		      	<ItemRow {...item} key={item._id} />
	      	))}
	      	{isLoaded && !items.length && <Nothing />}
	      </div>
      </div>
    );
  }
}

export default withRouter(Donor);
