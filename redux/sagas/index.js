import { fork, all } from "redux-saga/effects";
import cardSaga from "./cardSaga";
import employeeSaga from "./employeeSaga";

function* rootSaga() {
  yield all([fork(cardSaga), fork(employeeSaga)]);
}

export default rootSaga;
