import { useState } from "react";

const Hotel=()=>{

    const[rooms,SetRooms]=useState({
        room:"single room",
        price:2500,
        stock:"Abailable",
    });

    const updateStock=()=>{SetRooms(previousStock =>{
            return{...previousStock,stock:"Out Of Stock"}
            

        })
    }

    return(
      <>
      <h1>Hotel, {rooms.room} ,${rooms.price} ,{rooms.stock}</h1>
      <button onClick={()=>{updateStock()}}>check</button>
      </>
    )
}

export default Hotel;