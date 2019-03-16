import { fork, all } from "redux-saga/effects";
import cardSaga from "./cardSaga";
import employeeSaga from "./employeeSaga";
import messagePostSaga from "./messagePostSaga";

function* rootSaga() {
  yield all([fork(cardSaga), fork(employeeSaga), fork(messagePostSaga)]);
}

export default rootSaga;
