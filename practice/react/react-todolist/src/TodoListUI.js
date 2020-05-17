import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <Fragment>
        <Input
          onChange={props.handleInputChange}
          value={props.inputValue}
          placeholder="输入你想做的事"
          style={{width: '300px', marginRight: '10px', marginTop: '10px'}} />
        <Button type="primary" onClick={props.handleAddItem}>提交</Button>
        <List
          style={{width: '300px', marginTop: '10px'}}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => {props.handleDeleteItem(index)}}>
              {item}
            </List.Item>
          )}
        />
      </Fragment>
  )
}

export default TodoListUI;
