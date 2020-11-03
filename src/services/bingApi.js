import axios from 'axios';
import { parseBingItemsResult } from 'factory/bingSearchItems';

const BING_KEY = process.env.REACT_APP_BING_SEARCH_API_KEY;
const BASE_URL = process.env.REACT_APP_BING_SEARCH_BASE_URL;

export default class BingApi {
  searchByQuery(q) {
    const params = new URLSearchParams();
    params.append('q', q);
    return axios
      .get(`${BASE_URL}?${params}`, {
        headers: {
          'Ocp-Apim-Subscription-Key': BING_KEY,
        },
      })
      .then(res => res.data)
      .then(data => parseBingItemsResult(data))
      .catch(err => Promise.reject('Bing Api has failed'));
  }
}
