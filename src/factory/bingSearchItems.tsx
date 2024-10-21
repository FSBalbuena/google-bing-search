import { SearchItemType } from 'data/globalTypes';
/**
 * Get the search results from bing api and
 * @param {object} result
 * @description a bing search api result
 */

interface BingPartialResult {
  webPages: {
    value: {
      name: string;
      url: string;
      snippet: string;
    }[];
  };
}

export function parseBingItemsResult(
  result: BingPartialResult
): SearchItemType[] {
  if (!result) return [];
  if (!result.webPages) return [];
  return result.webPages.value.map(({ name, url, snippet }) => ({
    title: name,
    link: url,
    snippet,
  }));
}
