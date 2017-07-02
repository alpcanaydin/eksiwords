import api, { API_STATUS } from '../../util/api';

// Actions
const REQUEST = 'author/REQUEST';
const SUCCESS = 'author/SUCCESS';
const FAIL = 'author/FAIL';

// Action Creators
export const success = (author, data) => ({
  type: SUCCESS,
  author,
  data,
});

export const fail = (author, error) => ({
  type: FAIL,
  author,
  error,
});

export const request = author => async dispatch => {
  dispatch({ type: REQUEST, author });

  try {
    const { data, ok, problem } = await api.get(`/author?author=${author.toLowerCase()}`);

    if (!ok) {
      dispatch(fail(problem));
      return;
    }

    dispatch(success(author, data));
  } catch (err) {
    dispatch(fail(author, err.message));
  }
};

// Reducer
export default (state = {}, { type, author, data, error }) => {
  switch (type) {
    case REQUEST:
      return {
        ...state,
        [author]: {
          status: API_STATUS.LOADING,
          data: {},
          error: null,
        },
      };
    case SUCCESS:
      return {
        ...state,
        [author]: {
          status: API_STATUS.FETCHED,
          data,
          error: null,
        },
      };
    case FAIL:
      return {
        ...state,
        [author]: {
          status: API_STATUS.FAILED,
          data: {},
          error,
        },
      };
    default:
      return state;
  }
};
