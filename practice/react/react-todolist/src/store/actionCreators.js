import axios from 'axios';
import { CHANGE_INPUT_VALUE, CHANGE_LIST_VALUE, DELETE_LIST_ITEM, INIT_LIST_ACTION } from './actionTypes';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const getAddItemAction = () => ({
  type: CHANGE_LIST_VALUE,
});

export const getDeleteItemAction = (index) => ({
  type: DELETE_LIST_ITEM,
  value: index,
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('http://127.0.0.1:7001/test/list').then((res) => {
      const { data } = res;
      const action = initListAction(data);
      dispatch(action)
    })
  }
}