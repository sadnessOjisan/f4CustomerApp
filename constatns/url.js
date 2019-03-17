// @flow

import ENVS from "./env";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig()
  ? getConfig()
  : { publicRuntimeConfig: { REACT_APP_ENV: null } };
const { REACT_APP_ENV } = publicRuntimeConfig;

console.log(
  "publicRuntimeConfig.REACT_APP_ENV",
  publicRuntimeConfig.REACT_APP_ENV
);

let host;

switch (REACT_APP_ENV) {
  case ENVS.local:
    host = "http://localhost:3010";
    break;
  case ENVS.dev:
    host = "https://f4.dev.eastgateganbaru.com";
    break;
  case ENVS.stg:
    host = "https://f4.stg.eastgateganbaru.com";
    break;
  case ENVS.prd:
    host = "https://f4app.herokuapp.com";
    break;
  default:
    host = "aaaaaaaaaa";
}

export default host;
