import axios from "axios";
import { getUrl } from "../helpers/util";

const sampleAPI = {
  fetchEmployee() {
    return axios
      .get(getUrl("employee"))
      .then(response => ({
        payload: response.data
      }))
      .catch(error => ({
        error
      }));
  }
};

export default sampleAPI;
