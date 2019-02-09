import React, { Component } from 'react';
import { CATEGORIES as cats} from './../util/constants';

class CategoryFilter extends Component {
  render() {
    const { toggle, isActive, onChange, categories } = this.props;
    return (
      <div className={`modal ${isActive ? 'is-active' : ''}`}>
        <div className='modal-background'></div>
        <div className='modal-content'>
          <div className='box'>
            <h5 className='title is-5'>Categories</h5>
            {cats.map((cat) => (
              <div className='control' key={cat}>
                <label className='checkbox'>
                  <input name={cat} type='checkbox' checked={categories.includes(cat)} onChange={onChange} />
                  &nbsp;
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </div>
        <button className='modal-close is-large' aria-label='close' onClick={toggle}></button>
      </div>
    );
  }
}

export default CategoryFilter;
