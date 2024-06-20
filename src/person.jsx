import { useState } from "react"



export function PersonDetails() {

    // const [name, setName] = useState('Newtam kashyap');
    // const [age, setAge] = useState( 25);
    // const [course, setCourse] = useState('UI fullStack developer');
    // const [city, setCity] = useState('hyderabad');

    const[user,setUserDetails]=useState({
        name:"Newtam",
        age:25,
        course:"React",
        city:"hyd"
    })
    return (
        <>
            <h1>My Name is {user.name} I am {user.age} year's old, course is {user.course} and i am living in {user.city}</h1>
            <button>Click Me</button>
        </>
    )
}



