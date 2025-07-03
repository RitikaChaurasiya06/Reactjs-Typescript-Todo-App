
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import Navbar from "./components/Navbar"
import './App.css';



const App = () => {
  return (
    <main className="container bg-light my-5 p-4  rounded-4 shadow" style={{maxWidth: "700px"}}>
      <h1 className="app-title text-center text-dark fs-1 fw-bolder m-4">ToDo React js + Typescript</h1>
      <Navbar/>
      <AddTodo />
      <Todos/>

    </main>
  )
}

export default App
