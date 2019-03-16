// @flow

import { combineReducers } from "redux";
import card, { type State as cardState } from "./card";
import employee, { type State as employeeState } from "./employee";

export type Store = {| +card: cardState, +employee: employeeState |};

const reducer = combineReducers({ card, employee });

export default reducer;
