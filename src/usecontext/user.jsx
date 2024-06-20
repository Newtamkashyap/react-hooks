import { createContext, useContext, useState } from "react"

const UserContext=createContext();
export function Component1() {

    const [user,setUser]=useState("Newtam");

    return (
        <>
        <UserContext.Provider value={user}>
        <h1>Hello {user}</h1>
        <Component2/>
        </UserContext.Provider>
        
        </>
    )
}

function Component2(){
    return(
        <>
        <h2>component2</h2>
        <Component3/>
        </>
    )
}

function Component3(){
    return(
        <>
        <h3>component3</h3>
        <Component4/>
        </>
    )
}

function Component4(){
    return(
        <>
        <h4>component4</h4>
        <Component5/>
        </>
    )
}

function Component5(){
    const user=useContext(UserContext);
   
    return(
        <>
        <h5>Component5</h5>
        <h1>{`hello ${user} again!`}</h1>
        {/* <button onClick={()=>setUser("ashish")}>Button</button> */}
        </>
    )
}