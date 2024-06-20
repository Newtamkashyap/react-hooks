import { useState } from "react";

export const Apps=()=>{

    const [click,setClick]=useState(2)

    function Display(){
        alert("hi users")
    }

    function Car(){
        alert("cars are available only")
    }
    return(
        <div>
            <p> {click} </p>
            <button onClick={()=>{setClick(click+1)}}>click me</button>
            <p>Touch</p>
            <select >
                <option onClick={()=>Car()}>Dropdown button</option>
                <option >Car</option>

                <option>Bus</option>

                <option>Train</option>


            </select>
        </div>
    )
}