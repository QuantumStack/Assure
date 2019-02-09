import React, { Component } from 'react';
import ItemCard from './ItemCard';

class ItemsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.next = this.next.bind(this);
  }

  next() {
    if (this.state.index === this.props.items.length - 1) this.props.nextPage();
    else this.setState(({ index }) => ({ index: index + 1 }));
  }

  render() {
    const { items } = this.props;
    const item = items[this.state.index];
    if (item) return <ItemCard {...item} next={this.next} />;
    return null;
  }
}

export default ItemsContainer;
