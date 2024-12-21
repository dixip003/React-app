import React from "react";
import { Provider } from "react-redux";
import ListTodo from "./components/ListTodo";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <ListTodo />
      </div>
    </Provider>
  );
}
