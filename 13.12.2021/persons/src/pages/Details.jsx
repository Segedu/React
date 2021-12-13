import { Component } from "react";

const Details=({name, age, biography})=>{
   return(
    <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{biography}</p>
    </div> )
}
export default Details;