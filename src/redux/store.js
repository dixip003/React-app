import {
  configureStore,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from './root-reducer'
import saga from "../sagas/saga";

let sagaMiddleware = createSagaMiddleware();
const middleware = (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware]

const store = configureStore({
  reducer: rootReducer,
  middleware
});

sagaMiddleware.run(saga);

export default store;
