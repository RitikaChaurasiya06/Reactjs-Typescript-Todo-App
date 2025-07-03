import { useState, type FormEvent } from 'react'
import { useTodos } from '../store/Todos';

const AddTodo = () => {
    const[todo, setTodo] = useState("");
    const {handleAddToDo} = useTodos();
  
    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddToDo(todo)
        setTodo("")
    }

  return (
    <form onSubmit={handleFormSubmit} className='d-flex align-center justify-content-center gap-2 my-4 px-3 py-3 rounded bg-light'>
        <input type="text" className='p-1 w-75 border' placeholder='Add Your Task' value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type= "submit" className='btn btn-danger px-3 fw-semibold shadow-sm '>Add</button>
    </form>
  )
}

export default AddTodo
