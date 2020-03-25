import React, { Component } from 'react';
import store from './store';
import { changeInputAction, addItemAction, deleteItemAction, getTodoList } from './store/actionCreators';
import TodoListUi from './TodoListUi';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue= this.changeInputValue.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }
  state = {  }
  render() { 
    return ( 
      <TodoListUi
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        deleteItem={this.deleteItem}
        />
     );
  }

  changeInputValue(e) {
    const action = changeInputAction(e.target.value);
    store.dispatch(action)
  }

  deleteItem(index) {
    const action = deleteItemAction(index);
    store.dispatch(action);
  }

  clickBtn() {
    const action = addItemAction();
    store.dispatch(action);
  }

  storeChange(){
    this.setState(store.getState())
  }

  componentDidMount() {
    getTodoList();
  }
}
 
export default TodoList;