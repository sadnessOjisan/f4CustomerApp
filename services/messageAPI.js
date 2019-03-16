import axios from "axios";
import { getUrl } from "../helpers/util";

const messageAPI = {
  postMessage(value) {
    return axios
      .post(getUrl("message"), { ...value })
      .then(response => ({
        payload: response.data
      }))
      .catch(error => ({
        error
      }));
  }
};

export default messageAPI;
