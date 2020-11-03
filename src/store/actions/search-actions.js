import { actionCreator } from 'utils/storeActions';

import {
  ON_SEARCH,
  ON_SEARCH_SUCCEDED,
  ON_SEARCH_FAILED,
} from 'data/actionsConstants';

import { googleApi } from 'services';

export const actionRequest = actionCreator(ON_SEARCH);
export const actionSucceded = actionCreator(ON_SEARCH_SUCCEDED);
export const actionFailed = actionCreator(ON_SEARCH_FAILED);

export const searchForQuery = (searchEngine, search) => dispatch => {
  dispatch(actionRequest());
  return googleApi
    .searchByQuery(search)
    .then(results => dispatch(actionSucceded(results)))
    .catch(err => dispatch(actionFailed(err)));
};
