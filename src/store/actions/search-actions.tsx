import { actionCreator } from 'utils/storeActions';

import {
  ON_SEARCH,
  ON_SEARCH_SUCCEDED,
  ON_SEARCH_FAILED,
  SearchAction,
} from 'data/actionsConstants';

import { googleApi, bingApi, SearchTypes } from 'services';
import { Dispatch } from 'redux';

export const actionRequest = actionCreator(ON_SEARCH);
export const actionSucceded = actionCreator(ON_SEARCH_SUCCEDED);
export const actionFailed = actionCreator(ON_SEARCH_FAILED);

export const searchTypes = {
  google: googleApi.searchByQuery,
  bing: bingApi.searchByQuery,
  both: (search: string) => {
    return Promise.all([
      googleApi.searchByQuery(search),
      bingApi.searchByQuery(search),
    ])
      .then((values) => values.flatMap((array) => array))
      .catch((err) => Promise.reject('Something went wrong'));
  },
};

export const searchForQuery =
  (searchEngine: SearchTypes, search: string) =>
  (dispatch: Dispatch<SearchAction>) => {
    dispatch(actionRequest());
    return searchTypes[searchEngine](search)
      .then((results) => dispatch(actionSucceded(results)))
      .catch((err) => dispatch(actionFailed(err)));
  };
