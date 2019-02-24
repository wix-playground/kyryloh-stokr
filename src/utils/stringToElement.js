export const strToElement = (str) => {
  const parser = new DOMParser();
  return parser.parseFromString(str, "text/html").body.firstChild;
};
