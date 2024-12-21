import React from "react";
import { Provider } from "react-redux";
import { ListTodo } from "./components/ListTodo";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Click below button to get list of user details!</h2>
        <ListTodo />
      </div>
    </Provider>
  );
}
