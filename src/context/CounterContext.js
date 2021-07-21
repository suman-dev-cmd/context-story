import React,{ createContext,useState } from 'react'

export const CounterContext = createContext();
const CounterContextProvider = (props) => {
    const [count,setCount] = useState(0);
    const IncreaseCount = () =>{
        setCount(count+1);
    }
    const DecreseCount =()=>{
        if(count !== 0){
            setCount(count-1);
        }
    }
    return (
        <CounterContext.Provider value={{count,IncreaseCount,DecreseCount}}>
            {props.children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider
