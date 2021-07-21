import React, { useContext } from 'react'
import {CounterContext} from '../../context/CounterContext';
import { Button } from '../../stories/Button';
const Mycounter = () => {
   const {count,IncreaseCount,DecreseCount} = useContext(CounterContext);
    return (
        <div >
          <h3>Counter Component</h3>
          <p>Count is {count}</p>
          <Button size='large' onClick={IncreaseCount} label='Increment'/> 
          <Button primary size='large' onClick={DecreseCount}  label='Decrement'/> 
        </div>
    )
}

export default Mycounter
