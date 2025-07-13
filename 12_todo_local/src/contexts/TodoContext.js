import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo msg",
            completed: false
        },
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})

export const useTodo = () => {          // useTodo is a custom hook and can be used to acces values in future like... 
//                                        ... const { todos, deleteTodo, toggleComplete } = useTodo();
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider       // this is a provider jiske andar hi TodoContext ki
                                                        //  values and funtions accessible honge