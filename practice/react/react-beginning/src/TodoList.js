import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input , Button, List } from 'antd';
import axios from 'axios';
import store from './store';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  state = {  }
  render() { 
    return ( 
      <div style={{margin:'10px'}}>
        <div>
            <Input placeholder={this.state.inputValue} style={{ width:'250px', marginRight:'10px'}}/>
            <Button type="primary">增加</Button>
        </div>
        <div style={{margin:'10px',width:'300px'}}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={item => (
              <List.Item>
                {item}
              </List.Item>
              )}
            />
        </div>
      </div>
     );
  }

  componentDidMount() {
    console.log('hahahah');
    axios.get('http://rap2.taobao.org:38080/app/mock/data/1501675').then((res) => {
      console.log(res);
    });
  }
}
 
export default TodoList;