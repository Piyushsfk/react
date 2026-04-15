import { createContext,useContext } from "react";
export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updatedTodo:(todo)=>{},
    deleteTodo:(todo)=>{},
    toggleComplete:(todo)=>{}
})
export const usetodo=()=>{
    return useContext(TodoContext)
}
export const Todoprovider=TodoContext.Provider