export const addHttps = (url) => {
  if (!url.match(/^(?:f|ht)tps?:\/\//)) {
    url = "https://" + url;
  }
  return url;
};
