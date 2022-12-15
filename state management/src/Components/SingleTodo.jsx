import React from 'react'

const SingleTodo = ({id,status,title,handleUpdate,handleTodoDelete}) => {
  return (
    <div style={{display:"flex",justifyContent:"center",paddingTop:"2rem"}}>
        <h3 style={{paddingRight:"10px"}}>{title}</h3>
        <button style={{marginRight:"5px"}}onClick={() =>handleUpdate(id)}>{status ? "Done" : "Not Done"}</button>
        <button style={{marginLeft:"4px"}}onClick={() =>handleTodoDelete(id)}>Delete</button>
        </div>
  )
}

export default SingleTodo;