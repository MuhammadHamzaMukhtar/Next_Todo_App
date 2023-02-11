"use client"
import React from 'react';
import { useState } from 'react';
export default function CounterApp(){
    const [counter,setCounter] = useState(0);
    const decrement = () => {
        console.log(' IN DECREMENT ');
        setCounter(counter - 1);
    }
    const increment = () => {
        console.log(' IN INCREMENT ');
        setCounter(counter + 1)
    }
    return (
        <>
        <button onClick={decrement}>Decrement</button>
        {counter}
        <button onClick={increment}>Increment</button>
        </>
    )
}   