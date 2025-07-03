import { ReactNode, createContext, useContext, useState } from "react";

export type TodosProviderProps = {
    children: ReactNode
}

export type todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}
export type TodosContext = {
    todos:[];
    handleAddToDo:(task: string) => void;
    toggleTodoAsCompleted:(id:string) => void;
    handleDeleteTodo:(id:string) => void;
}
export const todosContext = createContext<TodosContext | null>(null)

export const TodosProvider = ({children}: TodosProviderProps) => {

    const [todos, setTodos] = useState<todo[]>([])

    const handleAddToDo = (task: string) => {
        setTodos((prev) => {
            const newTodos: todo[] = [
                {
                    id:Math.random().toString(),
                    task: task,
                    completed: false,
                    createdAt: new Date()
                },
                ...prev
            ]
            // console.log('my previous data' + prev)
            // console.log(newTodos);
            
            return newTodos
        })
    }


    const toggleTodoAsCompleted = (id:string) => {
        setTodos((prev) => {
            let newTodos = prev.map((todo) => {
                if(todo.id === id){
                    return{ ...todo, completed:!todo.completed}
                }
                return todo;
            })
            return newTodos
        })
    }

    const handleDeleteTodo = (id: string) => {
        setTodos((prev) => {
            let newTodos = prev.filter((filterTodo) => filterTodo.id !== id);
            return newTodos;
        })
    }

    return <todosContext.Provider value= {{todos, handleAddToDo, toggleTodoAsCompleted, handleDeleteTodo}}>
    {children}
    </todosContext.Provider>
}


// consumer
export const useTodos =  () => {
    const todosConsumer = useContext(todosContext);
    if(!todosConsumer){
        throw new Error ('useTodos');
    }
    return todosConsumer
}