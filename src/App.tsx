
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import Navbar from "./components/Navbar"



const App = () => {
  return (
    <main>
      <h1>ToDo React + Typescript</h1>
      <Navbar/>
      <AddTodo />
      <Todos/>

    </main>
  )
}

export default App
