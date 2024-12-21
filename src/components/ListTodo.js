import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../sagas/sagaActions";

export default function () {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);

  const renderList = () => {
    return todos?.users?.map(todo => {
      return (
        <ul key={`${todo.id}_ul`}>
          <li key={`${todo.id}_li`}>
            <p key={`${todo.id}_first-name`}>first Name: {todo.firstName}</p>
            <p key={`${todo.id}_last-name`}>last name: {todo.lastName}</p>
            <p key={`${todo.id}_email`}>Email: {todo.email}</p>
          </li>
        </ul>
      );
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
