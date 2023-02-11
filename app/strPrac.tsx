"use client"
import { useState } from "react";
export default function StrPrac() {
    // let  val = "Hello";
    const [val, setVal] = useState(' hello 1');
    const [val1, setVal1] = useState('hello 2 ');
  
    const onChangeEventHandle = (e: any) => {
      console.log("e is : ",e.target.value);
      setVal(e.target.value);
    };
    const onChangeEventHandle1 = (e: any) => {
      console.log("e is : ",e.target.value);
      setVal1(e.target.value);
    };
    return (
        <>
            <input type={"text"} value={val} onChange={onChangeEventHandle} />
            <br />
            <input type={"text"} value={val1} onChange={onChangeEventHandle1} />
              <br />
               length 1 : {val.length}; 
               <br />
               length 2 : {val1.length}; 
               <br />
               
        </>
         
    )}   

