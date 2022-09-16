import React, { useState } from "react";
import HeadeUnit from "./Header";
import './App.css';

function Todo({ todo, index, completeTodo, deleteTodo}) {
  return(
    <div className="line">
      <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}
        className="todo">{ todo.text }
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => deleteTodo(index)}>X</button>
        </div>
      </div>
    </div>
   
  )
}

function TodoForm({addTodo}) {
  const[value, setValue] = useState('');

  const handleSubmit = e=> {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        className="input"
        value={value}
        placeholder="Enter todos..." 
        onChange={e => setValue(e.target.value)} />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="header">
        <HeadeUnit/>
      </div>
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
        ))}
      </div>
    </div>
  )
}

export default App;