// @flow

import { call, takeEvery, put, select } from "redux-saga/effects";
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

function* startPostMessageSaga(action: startPostMessageAction) {
  const value = action.payload;
  const { payload, error }: { payload: Object, error: TError } = yield call(
    messageAPI.postMessage,
    value
  );
  if (payload && !error) {
    yield put(actions.successPostValue(payload));
  } else if (error) {
    yield put(actions.failPostValue(error));
  } else {
    throwError("bye");
  }
}

// $FlowFixMe TODO
export default function* cardSaga() {
  yield takeEvery(types.START_POST_MESSAGE, startPostMessageSaga);
}
