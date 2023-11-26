import { useState } from "react";
import { useTodo } from "../../context";

function TodoForm() {
    const {addTodos}  = useTodo()
    const [todo,setTodo] = useState("");
    
    const submitTodo = (e)=>{
        e.preventDefault()
        addTodos({id:Date.now(),todo,completed:false})
        setTodo("")
    }

    return (
        <form onSubmit={submitTodo}  className="flex">
            <input
                onChange={(e)=>setTodo(e.target.value)}
                value={todo}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

