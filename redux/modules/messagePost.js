// @flow

import { type TPostMessage } from "../../typedef/api/postMessage";
import { type TError } from "../../typedef/api/error";

const START_POST_MESSAGE = "EMPLOYEE/START_POST_MESSAGE";
const SUCCESS_POST_MESSAGE = "EMPLOYEE/SUCCESS_POST_MESSAGE";
const FAIL_POST_MESSAGE = "EMPLOYEE/FAIL_POST_MESSAGE";

export const types = {
  START_POST_MESSAGE,
  SUCCESS_POST_MESSAGE,
  FAIL_POST_MESSAGE
};

export type startPostMessageAction = {|
  +type: typeof START_POST_MESSAGE,
  +payload: TPostMessage
|};

type successPostMessageAction = {|
  +type: typeof SUCCESS_POST_MESSAGE
|};

type failPostMessageAction = {|
  +type: typeof FAIL_POST_MESSAGE,
  +payload: TError
|};

type Action =
  | startPostMessageAction
  | successPostMessageAction
  | failPostMessageAction;

export const actions = {
  startPostValue: (data: TPostMessage): startPostMessageAction => ({
    type: types.START_POST_MESSAGE,
    payload: data
  }),
  successPostValue: (): successPostMessageAction => ({
    type: types.SUCCESS_POST_MESSAGE,
    payload: data
  }),
  failPostValue: (err: TError): failPostMessageAction => ({
    type: types.FAIL_POST_MESSAGE,
    payload: err
  })
};

export type State = {
  isSending: boolean,
  isSent: boolean,
  error: TError | null
};

const initialState: State = {
  isSending: false,
  isSent: false,
  error: null
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case types.START_POST_MESSAGE:
      return { ...state, isSending: true, error: null };
    case types.SUCCESS_POST_MESSAGE:
      return {
        ...state,
        isSending: false,
        isSent: true
      };
    case types.FAIL_POST_MESSAGE:
      return {
        ...state,
        isLoading: false,
        isSent: true,
        error: action.payload
      };
    default:
      (action: empty);
      return state;
  }
};

export default reducer;
