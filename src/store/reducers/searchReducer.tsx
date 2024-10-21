import {
  ON_SEARCH,
  ON_SEARCH_SUCCEDED,
  ON_SEARCH_FAILED,
  SearchAction,
} from 'data/actionsConstants';

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export default (state = initialState, action: SearchAction) => {
  switch (action.type) {
    case ON_SEARCH:
      return { ...state, isLoading: true };
    case ON_SEARCH_SUCCEDED:
      return { ...initialState, data: action.payload };
    case ON_SEARCH_FAILED:
      return { ...initialState, error: action.payload };
    default:
      return state;
  }
};
