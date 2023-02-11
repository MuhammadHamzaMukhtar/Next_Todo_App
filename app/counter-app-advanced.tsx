"use client"
import React from 'react';
import { useState } from 'react';
export default function CounterAppAdvanced(){
    const [counter,setCounter] = useState(0);
    const decrement = (value = 1) => {
        console.log(' IN DECREMENT ');
        setCounter(counter - value);
    }
   
    const increment = (kitna = 1) => {
        console.log(' IN INCREMENT ');
        setCounter(counter + kitna)
    }
    
    return (
        <>
        <button onClick={()=>decrement(3)}>Decrement 3 </button>
        <button onClick={()=>decrement(2)}>Decrement 2 </button>
        <button onClick={()=>decrement}>Decrement</button>
        {counter}
        <button onClick={()=>increment}>Increment</button>
        <button onClick={()=>increment(2)}>Increment 2 </button>
        <button onClick={()=>increment(3)}>Increment 3 </button>
        </>
    )
}   