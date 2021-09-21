import { useState } from 'react';
function Button({ start }) {
    const [initVal, setInitVal] = useState(start);
    const [counter, setCounter] = useState(initVal);
    return (
        <div>
            <span className='counter' value={counter}>{counter ? counter : 0}</span>
            <button value='reducer' className='reducer' onClick={() => setCounter(counter - 1)}>Minus</button>
            <button value='increment' className='increment' onClick={() => setCounter(counter + 1)}>Plus</button>
            <button value='reset' className='reset' onClick={() => setCounter(start)}>Reset</button>
            <input className='initVal' type='number' placeholder='type initial value for counter' value={initVal} onChange={(e) => setInitVal(e.target.value)} /> <button onClick={() => setCounter(initVal)} className='change'>zmień</button>
        </div>
    )
}
export default Button