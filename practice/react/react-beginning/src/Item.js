import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this)
  }
  state = {  }
  render() { 
    return ( <li onClick={this.deleteItem}>{ this.props.content}</li> );
  }

  deleteItem() {
    this.props.deleteItem(this.props.index);
  }
}
 
export default Item;