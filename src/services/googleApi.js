import axios from 'axios';
import { parseGoogleItemsResult } from 'factory/googleSearchItems';

const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_SEARCH_API_KEY;
const BASE_URL = process.env.REACT_APP_GOOGLE_SEARCH_BASE_URL;
const PROJECT_ENGINE = process.env.REACT_APP_GOOGLE_SEARCH_PROJECT_ENGINE;

export default class GoogleApi {
  searchByQuery(q) {
    const params = new URLSearchParams();
    params.append('key', GOOGLE_KEY);
    params.append('cx', PROJECT_ENGINE);
    params.append('q', q);
    return axios
      .get(`${BASE_URL}?${params}`)
      .then(res => res.data)
      .then(data => parseGoogleItemsResult(data))
      .catch(err => Promise.reject('Google Api has failed'));
  }
}
