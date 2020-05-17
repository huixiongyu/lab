import { CHANGE_INPUT_VALUE, CHANGE_LIST_VALUE, DELETE_LIST_ITEM, INIT_LIST_ACTION } from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
}
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState
  }
  if (action.type === CHANGE_LIST_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_LIST_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value, 1)
    return newState
  }
  if (action.type ===INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data
    return newState
  }
  return state;
}