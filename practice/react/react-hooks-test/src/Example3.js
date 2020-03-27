import React, {  useState , useEffect } from 'react';

function Example3() {
    const [ count, setCount ] = useState(0);
    useEffect(() => {
        console.log(`useEffect=>You Clicked ${count} times`);
    })

    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={() => {setCount(count + 1)}}>Click me</button>
        </div>
    )
}

export default Example3;