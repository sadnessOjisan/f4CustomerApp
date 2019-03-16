// @flow

import { combineReducers } from "redux";
import card, { type State as cardState } from "./card";

export type Store = {| +card: cardState |};

const reducer = combineReducers({ card });

export default reducer;
