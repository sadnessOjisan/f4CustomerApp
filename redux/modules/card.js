// @flow

import { type TCards } from "../../typedef/api/cards";
import { type TError } from "../../typedef/api/error";

const START_FETCH_DATA = "A/START_FETCH_DATA";
const SUCCESS_FETCH_DATA = "A/SUCCESS_FETCH_DATA";
const FAIL_FETCH_DATA = "A/FAIL_FETCH_DATA";

export const types = {
  START_FETCH_DATA,
  SUCCESS_FETCH_DATA,
  FAIL_FETCH_DATA
};

type startFetchDataAction = {|
  +type: typeof START_FETCH_DATA
|};

type successFetchDataAction = {|
  +type: typeof SUCCESS_FETCH_DATA,
  +payload: TCards
|};

type failFetchDataAction = {|
  +type: typeof FAIL_FETCH_DATA,
  +payload: TError
|};

type Action =
  | startFetchDataAction
  | successFetchDataAction
  | failFetchDataAction;

export const actions = {
  startFetchData: (): startFetchDataAction => ({
    type: types.START_FETCH_DATA
  }),
  successFetchData: (data: TCards): successFetchDataAction => ({
    type: types.SUCCESS_FETCH_DATA,
    payload: data
  }),
  failFetchData: (err: TError): failFetchDataAction => ({
    type: types.FAIL_FETCH_DATA,
    payload: err
  })
};

type State = {
  isLoading: boolean,
  isLoaded: boolean,
  data: TCards | null,
  error: TError | null
};

const initialState: State = {
  isLoading: false,
  isLoaded: false,
  data: null,
  error: null
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case types.START_FETCH_DATA:
      return { ...state, isLoading: true, error: null };
    case types.SUCCESS_FETCH_DATA:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: action.payload
      };
    case types.FAIL_FETCH_DATA:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
