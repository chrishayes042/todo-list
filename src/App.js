import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });

    todoNameRef.current.value = null;
  }

  const handleKeyPress = (e) => {
    if (e.keyCode == 13) {
      handleAddTodo();
    }
  };

  return (
    <>
      <input type="text" onKeyDown={handleKeyPress} ref={todoNameRef} />
      <button onClick={handleAddTodo}>Add todo</button>
      <button>Clear Completed</button>
      <div>{todos.length} left to do</div>
      <TodoList todos={todos} />
    </>
  );
}

export default App;
