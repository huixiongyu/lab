import React, {Component} from 'react';
import Item from './Item';
import './style.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '王者荣耀',
      list: ['吃饭', '睡觉', '打豆豆']
    }
  }

  render() {
    return (
      <div>
        <div>Hello word</div>
        <div>
          <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul className="my-list">
          {
            this.state.list.map((item, index) => {
              return (
                <Item
                  content={item}
                  index={index}
                  key={index+item}
                  deleteItem={this.deleteItem.bind(this)}
                  />
              )
            })
          }
        </ul>
      </div>
    )
  }

  inputChange(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }

  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    })
  }

  deleteItem(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
}

export default App;
