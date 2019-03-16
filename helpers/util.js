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
