import axios from "axios";
import { getUrl } from "../helpers/util";

const sampleAPI = {
  fetchCards() {
    return axios
      .get(getUrl("cards"))
      .then(response => ({
        payload: response.data
      }))
      .catch(error => ({
        error
      }));
  },
  fetchCard(id) {
    return axios
      .get(getUrl("cards"), {
        params: {
          id
        }
      })
      .then(response => ({
        payload: response
      }))
      .catch(error => ({
        error
      }));
  }
};

export default sampleAPI;
