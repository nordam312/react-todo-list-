import "./App.css";
import TodoList from "./components/TodoList";

function App() {
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
        <TodoList />
      </div>

  );
}

export default App;
