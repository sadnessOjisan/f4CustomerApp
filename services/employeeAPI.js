// @flow

import axios from "axios";
import { getUrl } from "../helpers/util";

const employeeAPI = {
  fetchEmployee(id: string) {
    return axios
      .get(getUrl("employee"), {
        params: {
          id
        }
      })
      .then(response => ({
        payload: response.data
      }))
      .catch(error => ({
        error
      }));
  }
};

export default employeeAPI;
