import axios from 'axios';
import { fromJS } from 'immutable';
import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST } from './actionTypes';

const changeList = (data) => ({
  type: CHANGE_LIST,
  data: fromJS(data),
})

export const searchFocus = () => ({
  type: SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: SEARCH_BLUR
})

export const getList = () => {
  return (dispatch) => {
    axios.get('http://localhost:7001/test/list').then((res) => {
      console.log(res)
      dispatch(changeList(res.data));
    }).catch(() => {
      console.log('error');
    })
  }
}