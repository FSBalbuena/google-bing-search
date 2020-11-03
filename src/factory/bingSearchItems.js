/**
 * Get the search results from bing api and
 * @param {object} result
 * @description a bing search api result
 */
export const parseBingItemsResult = result =>
  result?.webPages?.value?.map(({ name, url, snippet }) => ({
    title: name,
    link: url,
    snippet,
  }));
