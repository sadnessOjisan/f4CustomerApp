// @flow

const START_FETCH_DATA = "A/START_FETCH_DATA";
const SUCCESS_FETCH_DATA = "A/SUCCESS_FETCH_DATA";
const FAIL_FETCH_DATA = "A/FAIL_FETCH_DATA";

export const types = {
  START_FETCH_DATA,
  SUCCESS_FETCH_DATA,
  FAIL_FETCH_DATA
};

export const actions = {
  startFetchData: () => ({
    type: types.START_FETCH_DATA
  }),
  successFetchData: data => ({
    type: types.SUCCESS_FETCH_DATA,
    payload: data
  }),
  failFetchData: err => ({
    type: types.FAIL_FETCH_DATA,
    payload: err
  })
};

const initialState: State = {
  isLoading: false,
  isLoaded: false,
  data: null,
  error: null
};

const reducer = (state = initialState, action) => {
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
