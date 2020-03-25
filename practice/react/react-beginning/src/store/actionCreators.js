import axios from 'axios';
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes';

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value,
});

export const addItemAction = () => ({
    type: ADD_ITEM,
});

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index,
});

export const getListAction  = (list)=>({
    type: GET_LIST,
    list
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('http://rap2.taobao.org:38080/app/mock/data/1504921').then((res) => {
            console.log(res);
            const { data } = res;
            const action = getListAction(data.list);
            dispatch(action);
        })
    }
}