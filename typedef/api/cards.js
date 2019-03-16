// @flow

import { type TCard } from "../model/card";

export type TCards = { cards: TCard[] };

export type CardRequest = {
  cursor: number, //どこまで取得したか
  length: number // 取得数
};
