// @flow

import { type TCard } from "../../typedef/model/card";
import { type TCards } from "../../typedef/api/cards";
import { type TError } from "../../typedef/api/error";

const START_FETCH_DATA = "CARD/START_FETCH_DATA";
const SUCCESS_FETCH_DATA = "CARD/SUCCESS_FETCH_DATA";
const FAIL_FETCH_DATA = "CARD/FAIL_FETCH_DATA";
const START_FETCH_MORE_DATA = "CARD/START_FETCH_MORE_DATA";
const SUCCESS_FETCH_MORE_DATA = "CARD/SUCCESS_FETCH_MORE_DATA";
const FAIL_FETCH_MORE_DATA = "CARD/FAIL_FETCH_MORE_DATA";

export const types = {
  START_FETCH_DATA,
  SUCCESS_FETCH_DATA,
  FAIL_FETCH_DATA,
  START_FETCH_MORE_DATA,
  SUCCESS_FETCH_MORE_DATA,
  FAIL_FETCH_MORE_DATA
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

type startFetchMoreDataAction = {|
  +type: typeof START_FETCH_MORE_DATA
|};

type successFetchMoreDataAction = {|
  +type: typeof SUCCESS_FETCH_MORE_DATA,
  +payload: TCards
|};

type failFetchMoreDataAction = {|
  +type: typeof FAIL_FETCH_MORE_DATA,
  +payload: TError
|};

type Action =
  | startFetchDataAction
  | successFetchDataAction
  | failFetchDataAction
  | startFetchMoreDataAction
  | successFetchMoreDataAction
  | failFetchMoreDataAction;

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
  }),
  startFetchMoreData: (): startFetchMoreDataAction => ({
    type: types.START_FETCH_MORE_DATA
  }),
  successFetchMoreData: (data: TCards): successFetchMoreDataAction => ({
    type: types.SUCCESS_FETCH_MORE_DATA,
    payload: data
  }),
  failFetchMoreData: (error: TError): failFetchMoreDataAction => ({
    type: types.FAIL_FETCH_MORE_DATA,
    payload: error
  })
};

export type State = {
  isLoading: boolean,
  isLoaded: boolean,
  data: TCard[] | null,
  error: TError | null,
  cursor: number
};

const initialState: State = {
  isLoading: false,
  isLoaded: false,
  data: null,
  error: null,
  cursor: 0
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
        data: action.payload.cards
      };
    case types.FAIL_FETCH_DATA:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        error: action.payload
      };
    case types.START_FETCH_MORE_DATA:
      return {
        ...state
      };
    case types.SUCCESS_FETCH_MORE_DATA:
      console.log("state.data: ", state.data);
      console.log("action.payload: ", action.payload);
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: state.data
          ? [...state.data, ...action.payload.cards]
          : action.payload.cards,
        cursor: state.cursor + 1
      };
    case types.FAIL_FETCH_MORE_DATA:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        error: action.payload
      };
    default:
      (action: empty);
      return state;
  }
};

export default reducer;
