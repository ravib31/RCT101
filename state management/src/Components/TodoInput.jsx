import React, { useState } from 'react'

const TodoInput = ({addTodo}) => {
    const [text, setText] = useState("");

  return (
    <div > 
     <input style={{bg:"yellow",color:"red",border:"2px solid red"}} type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
    <button  onClick={()=>addTodo(text)}>ADD</button>
    </div>
  )
}

export default TodoInput