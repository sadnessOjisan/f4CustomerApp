// @flow

import { call, takeEvery, put } from "redux-saga/effects";
import { types, actions } from "../modules/card";
import { type TCards } from "../../typedef/api/cards";
import { type TError } from "../../typedef/api/error";
import cardAPI from "../../services/cardAPI";
import { throwError } from "../../helpers/util";

function* startFetchData(action) {
  const { payload, error }: { payload: TCards, error: TError } = yield call(
    cardAPI.fetchSample,
    1
  );
  if (payload && !error) {
    yield put(actions.successFetchData(payload));
  } else if (error) {
    yield put(actions.failFetchData(error));
  } else {
    throwError("bye");
  }
}

// $FlowFixMe TODO
export default function* cardSaga() {
  yield takeEvery(types.START_FETCH_DATA, startFetchData);
}
