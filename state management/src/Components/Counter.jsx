// const counter = () =>{
//     return(
//         <div>
//             <h1>Hello Brother</h1>
//             </div>
//     )
// }
// export default counter;

import { useState } from "react";

export const Counter = () => {
    const [count,setCount] = useState(0)
    // const addCount=()=>{
    //     setCount(count+1)
    // }

    // const redCount=()=>{
    //     setCount(count-1)
    // }


    const handleCount=(value)=>{
        setCount(count+value)
    }
    return (
        <div>
            <h2 style={{color:"blue"}}>COUNTER APP</h2>
            <h3 style={{color:"blue"}}>count = {count}</h3>
            <button style={{color:"red"}} disabled={count===0} onClick={()=>handleCount(1)}>DEC</button>
            <button style={{color:"green"}} onClick={()=>handleCount(-1)}>INC</button>
        </div>
    )
}