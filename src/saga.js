import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
import { fetchData } from "./store";
import { sagaActions } from "./sagaActions";

let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data
  });
};

export function* fetchDataSaga() {
  try {
    let result = yield call(() =>
      callAPI({ url: "https://dummyjson.com/users" })
    );
    console.log('result', result)
    yield put(fetchData(result.data));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}
