// @flow

import { call, takeEvery, put, select } from "redux-saga/effects";
import { types, actions } from "../modules/card";
import { type TCards } from "../../typedef/api/cards";
import { type TError } from "../../typedef/api/error";
import cardAPI from "../../services/cardAPI";
import { throwError } from "../../helpers/util";
import { type Store } from "../modules";

function* startFetchData(action) {
  const count = yield select((state: Store) => state.card.cursor);
  const { payload, error }: { payload: TCards, error: TError } = yield call(
    cardAPI.fetchCards,
    count
  );
  if (payload && !error) {
    yield put(actions.successFetchData(payload));
  } else if (error) {
    yield put(actions.failFetchData(error));
  } else {
    throwError("bye");
  }
}

function* startFetchMoreDataSaga(action) {
  const count = yield select((state: Store) => state.card.cursor);
  const { payload, error }: { payload: TCards, error: TError } = yield call(
    cardAPI.fetchCards,
    count
  );
  if (payload && !error) {
    yield put(actions.successFetchMoreData(payload));
  } else if (error) {
    yield put(actions.failFetchMoreData(error));
  } else {
    throwError("bye");
  }
}

// $FlowFixMe TODO
export default function* cardSaga() {
  yield takeEvery(types.START_FETCH_DATA, startFetchData);
  yield takeEvery(types.START_FETCH_MORE_DATA, startFetchMoreDataSaga);
}
