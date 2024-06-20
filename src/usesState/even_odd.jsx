import { useState } from "react"



export const EvenOdd = () => {

const[number,setNumber]=useState(0);

    return (
        <>
            <p>you have clicked {number} times</p>
            <p>The number of times you have clicked is {number % 2===0 ? 'even' : 'odd'}</p>
            <button onClick={()=>{setNumber(number+1)}}>click Me</button>
        </>
    )
}