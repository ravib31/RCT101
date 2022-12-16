import React from 'react'
import { useState } from 'react'
import { AllTodo } from './AllTodo'
import Navbar from './Navbar'
import TodoInput from './TodoInput'
import axios from 'axios'
import { useEffect } from 'react'

const Todo = () => {
    const [title,setTitle] = useState("Todo App");
    const [todos,setTodos] = useState(null);


    useEffect(()=>{
        getData()
    },[])

    const getData=()=>{
        axios.get("http://localhost:3000/todos").then((res) =>{
            setTodos(res.data);
    })
    }
    const addTodo= (data)=>{
        const payload={
            title: data,
            id:Date.now(),
            status:false,
        }
       axios.post ("http://localhost:3000/todos",payload).then((res) =>{
        alert("Added Successfully");
        getData();
    }).catch((err) =>{
        alert("Failed to add")
    
       })
    }
    const handleUpdate=(id,status)=>{
        // const newTodos =todos.map((todo) =>{
        //     if(todo.id===id){
        //         return{...todo,status:!todo.status}
        //     }
        //     else{
        //         return todo;
        //     }
        // })
        // setTodos(newTodos)
        axios.patch (`http://localhost:3000/todos/${id}`,{status: !status}).then((res)=>{
            alert("Data Updated");
            getData();
        })

    }
    const handleTodoDelete= (id)=>{
        axios.delete(`http://localhost:3000/todos/${id}`).then((res)=>{
            alert("Deleted Successfully");
            getData();
        })
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