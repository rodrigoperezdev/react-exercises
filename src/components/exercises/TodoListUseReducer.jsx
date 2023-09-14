import React, { useContext, useReducer, useState } from "react";
import { ToggleDarkModeButton } from "../UI/ToggleDarkModeButton";
import { ThemeContext } from "../../themes/ThemeProvider";
import { Header } from "../UI/Header";
import { useEffect } from "react";

export const TodoListUseReducer = () => {
  const initialState = [
    {
      id: 1,
      toDo: "Learn React",
      done: false,
    },
    { id: 2, toDo: "Get better at Javascript", done: false },
    { id: 3, toDo: "Practice every React hook", done: false },
  ];

  const toDoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          { id: Date.now(), toDo: action.payload, completed: false },
        ];
      case "COMPLETE_TODO":
        return state.map((todo) =>
          todo.id == action.payload ? { ...todo, done: !todo.completed } : todo
        );
      case "DELETE_TODO":
        return state.filter((todo) => todo.id != action.payload);
      default:
        return state;
    }
  };

  const { containerClasses } = useContext(ThemeContext);
  const [inputValue, setInputValue] = useState("");
  const [todos, dispatch] = useReducer(toDoReducer, initialState);

  const addNewTodo = () => {
    if (inputValue.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: inputValue });
      setInputValue("");
    }
  };

  const completeTodo = (e) => {
    dispatch({ type: "COMPLETE_TODO", payload: e });
  };

  const deleteTodo = (e) => {
    dispatch({ type: "DELETE_TODO", payload: e });
  };

  return (
    <Header>
      <div className="row vh-100 justify-content-center align-content-center">
        <div className="row my-3">
          <h1>Todo list using useReducer hook</h1>
          <h4 className="mt-3">Why use useReducer?</h4>
          <p>
            This React hook is probably one of the best options when changing
            <strong> complex states</strong> in your React app, and also great
            when you need to make <strong>multiple changes at once</strong>.
          </p>
        </div>
        <div className="row">
          <ul>
            {todos.map((todo) => (
              <li className="mb-2 d-flex" key={todo.id}>
                {todo.done ? <del>{todo.toDo}</del> : todo.toDo}{" "}
                <h5
                  onClick={(e) => completeTodo(e.target.id)}
                  className="ms-2 mb-0"
                  id={todo.id}
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  Done |
                </h5>
                <h5
                  onClick={(e) => deleteTodo(e.target.id)}
                  className="ms-2 mb-0"
                  id={todo.id}
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  Delete
                </h5>
              </li>
            ))}
          </ul>
        </div>
        <div className="row mt-4">
          <input
            type="text"
            className="w-100 mb-3"
            placeholder="Add a new Todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div>
            <button className="btn" onClick={addNewTodo}>
              Add Todo
            </button>
          </div>
        </div>
      </div>
    </Header>
  );
};
