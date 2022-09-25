export const appReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_GOAL':
      return {
        goals: [
          ...state.goals,
          { _id: action.id, details: action.goal, complete: action.complete },
        ],
      };
    case 'REMOVE_GOAL': {
      return { goals: state.goals.filter((item) => item._id !== action.id) };
    }
    case 'COMPLETE_GOAL':
      const goalIndex = state.goals.findIndex((item) => item._id === action.id);
      state.goals[goalIndex].complete = action.complete;
      return { goals: [...state.goals] };
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          { _id: action.id, details: action.todo, complete: action.complete },
        ],
      };
    case 'REMOVE_TODO':
      return { todos: state.todos.filter((item) => item._id !== action.id) };
    case 'COMPLETE_TODO':
      const todoIndex = state.todos.findIndex((item) => item._id === action.id);
      state.todos[todoIndex].complete = action.complete;
      return { todos: [...state.todos] };
    default:
      return state;
  }
};
