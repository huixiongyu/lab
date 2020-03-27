import React, { useContext } from 'react';
import {ColorContext,UPDATE_COLOR} from './color'

function Buttons(){
    const { dispatch } = useContext(ColorContext)
    return (
        <div>
            <button>红色</button>
            <button>黄色</button>
        </div>
    )
}

export default Buttons