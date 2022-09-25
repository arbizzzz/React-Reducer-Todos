import React, { useReducer, useRef } from 'react';
import Input from './Input';
import { generateId } from '../utils/generateId';
import { appReducer } from '../utils/reducer';

export default function Goals() {
  const [state, dispatch] = useReducer(appReducer, { goals: [] });
  const ref = useRef();

  const addGoal = () => {
    const goal = ref.current.value;
    goal.trim() !== ''
      ? dispatch({ type: 'ADD_GOAL', id: generateId(), goal, complete: false })
      : alert('Text cannot be empty');

    ref.current.value = '';
  };

  const removeGoal = (id) => {
    dispatch({ type: 'REMOVE_GOAL', id });
  };

  const toggleGoal = (event, id) => {
    dispatch({ type: 'COMPLETE_GOAL', id, complete: event.target.checked });
  };

  const { goals } = state;

  return (
    <div id='todos'>
      <h2>Goals</h2>
      <Input id='goals' btnText='Add Goal' onSubmit={addGoal} ref={ref} />
      <ul>
        {goals &&
          goals.map((goal) => {
            return (
              <li key={goal._id}>
                <input
                  type='checkbox'
                  onChange={(e) => toggleGoal(e, goal._id)}
                />
                <span className={goal.complete ? 'disabled' : ''}>
                  {goal.details}
                </span>
                {<button onClick={() => removeGoal(goal._id)}>X</button>}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
