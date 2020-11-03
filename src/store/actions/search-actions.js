import { actionCreator } from 'utils/storeActions';

import {
  ON_SEARCH,
  ON_SEARCH_SUCCEDED,
  ON_SEARCH_FAILED,
} from 'data/actionsConstants';

import { googleApi, bingApi } from 'services';

export const actionRequest = actionCreator(ON_SEARCH);
export const actionSucceded = actionCreator(ON_SEARCH_SUCCEDED);
export const actionFailed = actionCreator(ON_SEARCH_FAILED);

export const searchTypes = {
  google: googleApi.searchByQuery,
  bing: bingApi.searchByQuery,
  both: search => {
    return Promise.all([
      googleApi.searchByQuery(search),
      bingApi.searchByQuery(search),
    ])
      .then(values => values.flatMap(array => array))
      .catch(err => Promise.reject('Something went wrong'));
  },
};

export const searchForQuery = (searchEngine, search) => dispatch => {
  dispatch(actionRequest());
  return searchTypes[searchEngine](search)
    .then(results => dispatch(actionSucceded(results)))
    .catch(err => dispatch(actionFailed(err)));
};
