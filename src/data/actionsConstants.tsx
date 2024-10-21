export const ON_SEARCH = 'ON_SEARCH';
export const ON_SEARCH_SUCCEDED = 'ON_SEARCH_SUCCEDED';
export const ON_SEARCH_FAILED = 'ON_SEARCH_FAILED';
export type SearchActionType =
  | 'ON_SEARCH'
  | 'ON_SEARCH_SUCCEDED'
  | 'ON_SEARCH_FAILED';
export interface SearchAction {
  type: SearchActionType;
  payload: any;
}
