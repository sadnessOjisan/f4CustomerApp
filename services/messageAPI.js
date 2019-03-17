// @flow

import axios from "axios";
import { getUrl } from "../helpers/util";
import { type TPostMessage } from "../typedef/api/postMessage";

const messageAPI = {
  postMessage(value: TPostMessage) {
    return axios
      .post(getUrl("card"), { ...value })
      .then(response => ({
        payload: response.data
      }))
      .catch(error => ({
        error
      }));
  }
};

export default messageAPI;
