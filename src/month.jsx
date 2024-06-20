import { useState } from "react"

export function Month(){

    const[month,setMonth]=useState("");
    return(
        <>
        <h1>Months is {month}</h1>
        <button type="button" onClick={()=>setMonth("january")}>button1</button>
        <button type="button" onClick={()=>setMonth("February")}>button2</button>
        <button type="button" onClick={()=>setMonth("March")}>button3</button>
        <button type="button" onClick={()=>setMonth("April")}>button4</button>
        <button type="button" onClick={()=>setMonth("May")}>button5</button>
        <button type="button" onClick={()=>setMonth("June")}>button6</button>
        

        </>
    )
}