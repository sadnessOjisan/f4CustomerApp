import axios from "axios";

const sampleAPI = {
  fetchSample(id) {
    return axios
      .get("http://fjpiwejfew.com", {
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
