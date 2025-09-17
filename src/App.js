import "./App.css";
import TodoList from "./components/TodoList";
import { TodosContext } from "./contexts/todosContext";
import { useState } from "react";

const initialTodos = [
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
