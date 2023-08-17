import React, {useState, useEffect} from "react";
import {Top_box} from "./Style";
import "./App.css";

function App(){
  const [todo, setTodo] = useState([]);
  const [todoId, setTodoId] = useState(0);

  const handle = (todoText) => {
    setTodo([...todo,{
      todoText: todoText,
      todoId: todoId,
      todoDone: false
    },
  ])
  setTodoId(todoId +1);
  }

  const handleToggle = (todoId) => {
    setTodo(
      todo.map((item) => {
        return item.todoId === todoId ? {...item, todoDone: !item.todoDone} : item;
      })
    )
  }

  const handleDelete = (todoId) => {
    setTodo(
      todo.filter((item) => {
        return item.todoId !== todoId;
      })
    )
  }

  useEffect(() => {
    const javaTodo = JSON.parse(localStorage.getItem("todo"));
    if(!javaTodo) return;
    setTodo(javaTodo);
    if(javaTodo.length !== 0){
      setTodoId(javaTodo[javaTodo.length -1].todoId + 1);
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  },[todo]);

  return <div>
    <h1>LIST</h1>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handle(e.target.todo.value);
        e.target.todo.value = "";
      }}
    >
      <input className="text" type="text" placeholder="할일" name="todo" />
      <input className="submit" type="submit" value="추가" />
      <ul>
      {todo.map((item, index) => {
        return(
          <li key={index}>
            <span
              onClick={() => {handleToggle(item.todoId)}}
              className={item.todoDone ? "done" : ""}
            >
              {item.todoText}
            </span>
            <span className="btn" onClick={() => {handleDelete(item.todoId)}}> X</span>
          </li>
        )
      })}
    </ul>
    </form>
    <Top_box />
    
  </div>
}

export default App