import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "./sagaActions";

export default function () {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);

  console.log(todos);

  const renderList = () => {
    return todos?.users?.map(todo => {
      return <p key={todo.id}>{todo.email}</p>;
    });
  };

  return (
    <div>
      <button onClick={() => dispatch({ type: sagaActions.FETCH_DATA_SAGA })}>
        Getdata
      </button>
      {renderList()}
    </div>
  );
}
