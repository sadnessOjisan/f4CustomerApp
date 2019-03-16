import HOST from "../constatns/url";

export const getUrl = (path: string) => {
  return `${HOST}/${path}`;
};
