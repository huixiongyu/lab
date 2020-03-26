import React from 'react';
import {connect} from 'react-redux';

const TodoList = (props) => {
    let { inputValue, inputChange, clickBtn, list} = props;
    return ( 
        <div>
            <div>
                <input value={inputValue} onChange={inputChange.bind(this)} />
                <button onClick={clickBtn}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                    return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </div>
        );
}

const stateToProps = (state)=>{
    const { inputValue, list} = state;
    return {
        inputValue,
        list,
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e){
            const action = {
                type: 'change_input',
                value: e.target.value,
            }
            dispatch(action);
        },
        clickBtn() {
            const action = {
                type: 'add_item',
            }
            dispatch(action);
        }
    }
}
 
export default connect(stateToProps,dispatchToProps)(TodoList);