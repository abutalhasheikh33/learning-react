//create context
//create provide
//return usecontext in a hook

import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos:[],
    addTodo:()=>{},
    updateTodo:()=>{},
    deleteTodo:()=>{},
    toggleCompleted:()=>{},

});

export const TodoProvider = TodoContext.Provider;

export const useTodo = ()=>{
        return useContext(TodoContext);
}