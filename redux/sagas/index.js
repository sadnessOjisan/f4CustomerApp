import { fork, all } from "redux-saga/effects";
import cardSaga from "./cardSaga";

function* rootSaga() {
  yield all([fork(cardSaga)]);
}

export default rootSaga;
