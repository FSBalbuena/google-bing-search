import GoogleApi from './googleApi';
import BingApi from './bingApi';

export const googleApi = new GoogleApi();

export const bingApi = new BingApi();

export type SearchTypes = 'google' | 'bing' | 'both';
