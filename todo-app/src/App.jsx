import { useEffect, useState } from 'react'


import { TodoProvider } from './context/TodoContext/context';
import {TodoForm,TodoItem} from './components'


function App() {
  const [todos,setTodos] = useState([])
  const addTodos = (todo)=>{

      setTodos((prev)=> todo.todo!=""?[...prev,todo]:prev);
  }

  const updateTodo = (id,todoText)=>{
    // setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id==id?[{...prevTodo,todo:todoText},...prev]:prev))
    // setTodos([(prev)=>prev.map((prevTodo)=>prevTodo.id==id?{...prevTodo,todo:todoText}:prev)])
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id==id?{...prevTodo,todo:todoText}:prevTodo) )
  }
  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id!=id))
  }
  const toggleCompleted = (id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id==id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

  useEffect(()=>{
       const todos = JSON.parse(localStorage.getItem("todos"))
       if(todos && todos.length>0){
         setTodos(todos);
      }
      
      

  
  },[])
  useEffect(()=>{
   
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <TodoProvider value={{addTodos,updateTodo,deleteTodo,toggleCompleted}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo,index)=>(
                          <div className='w-full'>
                                  <TodoItem key={index} todo={todo} />
                          </div>
                        ))}
                        
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
