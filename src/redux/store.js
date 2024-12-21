import {
  configureStore,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todosReducer from './features/todos/todosSlice'
import saga from "../sagas/saga";

let sagaMiddleware = createSagaMiddleware();
const middleware = (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware]

const store = configureStore({
  reducer: {
    todo: todosReducer
  },
  middleware
});

sagaMiddleware.run(saga);

export default store;
