import React from 'react'
import SingleTodo from './SingleTodo';

export const AllTodo = ({todos , handleUpdate , handleTodoDelete}) => {
  return (
    <div style={{bg:"yellow",color:"red" ,paddingLeft:"10px"}}> 
   {todos ?.map((todo) => <SingleTodo {...todo} handleUpdate={handleUpdate} handleTodoDelete={handleTodoDelete}/>)}
    </div>
  )
}
