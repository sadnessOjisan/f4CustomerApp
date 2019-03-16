import axios from "axios";
import { getUrl } from "../helpers/util";

const cardAPI = {
  fetchCards(count: number) {
    const Length = 10;
    return axios
      .get(getUrl("cards"), {
        params: {
          count,
          length: Length
        }
      })
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

export default cardAPI;
