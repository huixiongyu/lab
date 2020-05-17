import React, { Component } from 'react';
import TodoListUI from './TodoListUI';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList } from './store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    store.subscribe(this.handleStoreChange)
  }
  render() { 
    return ( 
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleAddItem={this.handleAddItem}
        handleDeleteItem={this.handleDeleteItem}
      />
     )
  }

  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleAddItem() {
    const action = getAddItemAction();
    store.dispatch(action);
  }
  handleDeleteItem(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action)
  }
  
}
 
export default TodoList;