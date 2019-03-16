import { combineReducers } from "redux";
import card, { type State as cardState } from "./card";

export type Store = {| +card: aState |};

const reducer = combineReducers({ card });

export default reducer;
