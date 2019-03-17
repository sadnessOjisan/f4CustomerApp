// @flow

import HOST from "../constatns/url";
import ENVS from "../constatns/env";
import ENV from "../constatns/env";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const { REACT_APP_ENV } = publicRuntimeConfig;

export const getUrl = (path: string) => {
  return `${HOST}/${path}`;
};

export const throwError = (message: string) => {
  switch (REACT_APP_ENV) {
    case ENVS.local:
    case ENVS.dev:
      throw new Error(message);
    case ENVS.stg:
    case ENVS.prd:
      console.error(message);
      break;
    default:
      console.error(message);
  }
};

export const getUrlVars = (): { [string]: string } => {
  var vars = {};
  var param = location.search.substring(1).split("&");
  for (var i = 0; i < param.length; i++) {
    var keySearch = param[i].search(/=/);
    var key = "";
    if (keySearch != -1) key = param[i].slice(0, keySearch);
    var val = param[i].slice(param[i].indexOf("=", 0) + 1);
    if (key != "") vars[key] = decodeURI(val);
  }
  return vars;
};
