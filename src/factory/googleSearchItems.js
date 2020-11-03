/**
 * Get the search results from google api and
 * @param {object} result
 * @description a google search api result
 */
export const parseGoogleItemsResult = result =>
  result.items.map(({ title, link, snippet }) => ({ title, link, snippet }));
