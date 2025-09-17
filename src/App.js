import "./App.css";
import TodoList from "./components/TodoList";
import { TodosContext } from "./contexts/todosContext";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const initialTodos = [
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    details: "sadadasdasdsa",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    details: "sadadasdasdsa",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    details: "sadadasdasdsa",
    isCompleted: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#1e3c1e",
        direction: "rtl",
      }}
    >
      <TodosContext.Provider value={{todos: todos , setTodos : setTodos}}>
        <TodoList />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
