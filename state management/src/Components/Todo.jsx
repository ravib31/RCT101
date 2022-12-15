import React from 'react'
import { useState } from 'react'
import { AllTodo } from './AllTodo'
import Navbar from './Navbar'
import TodoInput from './TodoInput'

const Todo = () => {
    const [title,setTitle] = useState("Todo App");
    const [todos,setTodos] = useState([]);
    const addTodo= (data)=>{
        const payload={
            title: data,
            id:Date.now(),
            status:false,
        }
        setTodos([...todos,payload])
    }
    const handleUpdate=(id)=>{
        const newTodos =todos.map((todo) =>{
            if(todo.id===id){
                return{...todo,status:!todo.status}
            }
            else{
                return todo;
            }
        })
        setTodos(newTodos)
    }
    const handleTodoDelete= (id)=>{
        const newTodos =todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    }
  return (
    <div>
       
            {/* navbar */}
            <Navbar title={title}/>
           
      
            {/* input */}
            <TodoInput addTodo={addTodo}/>
          
       
            {/* allTodo */}
            <AllTodo todos={todos} handleTodoDelete={handleTodoDelete} handleUpdate={handleUpdate}/>
       
        
    </div>
  )
}

export default Todo