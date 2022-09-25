import React, { useReducer, useRef } from 'react';
import Input from './Input';
import { generateId } from '../utils/generateId';
import { appReducer } from '../utils/reducer';

export default function Todos() {
  const [state, dispatch] = useReducer(appReducer, { todos: [] });
  const ref = useRef();

  const addTodo = () => {
    const todo = ref.current.value;
    todo.trim() !== ''
      ? dispatch({ type: 'ADD_TODO', id: generateId(), todo, complete: false })
      : alert('Text cannot be empty');

    ref.current.value = '';
  };

  const removeTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', id });
  };

  const toggleTodo = (event, id) => {
    dispatch({ type: 'COMPLETE_TODO', id, complete: event.target.checked });
  };

  const { todos } = state;

  return (
    <div id='todos'>
      <h2>Todos</h2>
      <Input id='todos' btnText='Add todo' onSubmit={addTodo} ref={ref} />
      <ul>
        {todos &&
          todos.map((todo) => {
            return (
              <li key={todo._id}>
                <input
                  type='checkbox'
                  onChange={(e) => toggleTodo(e, todo._id)}
                />
                <span className={todo.complete ? 'disabled' : ''}>
                  {todo.details}
                </span>
                {<button onClick={() => removeTodo(todo._id)}>X</button>}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
