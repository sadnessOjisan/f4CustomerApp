// @flow

import Router from "next/router";
import { call, takeEvery, put, select, take } from "redux-saga/effects";
import { types, actions, type startFetchDataAction } from "../modules/employee";
import { type TEmployee } from "../../typedef/api/employee";
// @flow

import { type TError } from "../../typedef/api/error";
import employeeAPI from "../../services/employeeAPI";
import { throwError } from "../../helpers/util";
import { type Store } from "../modules";

function* startFetchDataSaga(action: startFetchDataAction): Generator<*, *, *> {
  const id: string = action.payload;
  const { payload, error }: { payload: TEmployee, error: TError } = yield call(
    employeeAPI.fetchEmployee,
    id
  );
  if (payload && !error) {
    yield put(actions.successFetchData(payload));
    yield take(actions.successFetchData);
  } else if (error) {
    yield put(actions.failFetchData(error));
    yield take(actions.failFetchData);
  } else {
    throwError("bye");
  }
}

export default function* cardSaga(): Generator<*, *, *> {
  yield takeEvery(types.START_FETCH_DATA, startFetchDataSaga);
}
