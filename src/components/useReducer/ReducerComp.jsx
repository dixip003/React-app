import React, {useReducer} from 'react'

const reducer = (state, action) =>{
  const { type } = action;

  switch (type) {
    case 'increment': {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? 'Maximum reached' : null,
      };
    }
    case 'decrement': {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? 'Minimum reached' : null,
      };
    }
    default:
      return state;
  }
}

export const ReducerComp = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });
  return (
    <div>
      <div>Count: {state.count}</div>
      <button  onClick={() => dispatch({ type: 'increment' })}> Increment </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  )
}
