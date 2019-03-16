import { call, takeEvery, put } from "redux-saga/effects";
import { types, actions } from "../modules/card";
import cardAPI from "../../services/cardAPI";

function* startFetchData(action) {
  const { payload, error } = yield call(cardAPI.fetchSample, 1);
  if (payload && !error) {
    yield put(actions.successFetchData(payload));
  } else if (error) {
    yield put(actions.failFetchData(error));
  } else {
    throw new Error("bye");
  }
}

export default function* aSaga() {
  yield takeEvery(types.START_FETCH_DATA, startFetchData);
}
