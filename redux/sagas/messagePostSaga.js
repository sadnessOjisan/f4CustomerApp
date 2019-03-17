// @flow

import { call, takeEvery, put, select } from "redux-saga/effects";
import Router from "next/router";
import {
  types,
  actions,
  type startPostMessageAction
} from "../modules/messagePost";
import { type TPostMessage } from "../../typedef/api/postMessage";
import { type TError } from "../../typedef/api/error";
import messageAPI from "../../services/messageAPI";
import { throwError } from "../../helpers/util";
import { type Store } from "../modules";

function* startPostMessageSaga(
  action: startPostMessageAction
): Generator<*, *, *> {
  const value = action.payload;
  const employeeId = yield select(state => state.employee.data.id);
  const postValue = { ...value, employee_id: employeeId };
  const { payload, error }: { payload: Object, error: TError } = yield call(
    messageAPI.postMessage,
    postValue
  );
  if (payload && !error) {
    yield put(actions.successPostValue());
    yield call(Router.push, "/posted");
  } else if (error) {
    yield put(actions.failPostValue(error));
  } else {
    throwError("bye");
  }
}

export default function* cardSaga(): Generator<*, *, *> {
  yield takeEvery(types.START_POST_MESSAGE, startPostMessageSaga);
}
