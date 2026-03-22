import { useState } from "react";
import reactlog from "./assets/react.svg"

export function JSX_fun(){

    const name = "Mishra";
    const [age, setage] =useState(20);

    return(
        <div>
        <h1> Hello Gauav</h1>
        <h1>{age}</h1>
        <button onClick={()=> {setage(age+1)}}>increase the age </button>
        
        </div>
       
    ) ;
}