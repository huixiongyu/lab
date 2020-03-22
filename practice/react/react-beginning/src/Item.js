import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this)
  }
  state = {  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content !== this.props.content) {
      return true;
    }
    return false;
  }
  render() { 
    return ( <li onClick={this.deleteItem}>{ this.props.content}</li> );
  }

  deleteItem() {
    this.props.deleteItem(this.props.index);
  }
}

Item.propTypes={
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func,
}
 
export default Item;