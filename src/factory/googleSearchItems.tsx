import { SearchItemType } from 'data/globalTypes';

/**
 * Get the search results from google api and
 * @param {object} result
 * @description a google search api result
 */

interface GooglePartialResult {
  items: SearchItemType[];
}
export const parseGoogleItemsResult = (
  result: GooglePartialResult
): SearchItemType[] =>
  result.items.map(({ title, link, snippet }) => ({ title, link, snippet }));
