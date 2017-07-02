import api, { API_STATUS } from '../../util/api';

// Actions
const REQUEST = 'general/REQUEST';
const SUCCESS = 'general/SUCCESS';
const FAIL = 'general/FAIL';

// Action Creators
export const success = data => ({
  type: SUCCESS,
  data,
});

export const fail = error => ({
  type: FAIL,
  error,
});

export const request = () => async dispatch => {
  dispatch({ type: REQUEST });

  try {
    const { data, ok, problem } = await api.get('general');

    if (!ok) {
      dispatch(fail(problem));
      return;
    }

    dispatch(success(data));
  } catch (err) {
    dispatch(fail(err.message));
  }
};

// Reducer
const initialState = {
  status: API_STATUS.INIT,
  data: {},
  error: null,
};

export default (state = initialState, { type, data, error }) => {
  switch (type) {
    case REQUEST:
      return {
        ...state,
        status: API_STATUS.LOADING,
      };
    case SUCCESS:
      return {
        ...state,
        status: API_STATUS.FETCHED,
        data,
      };
    case FAIL:
      return {
        ...state,
        status: API_STATUS.FAILED,
        data: {},
        error,
      };
    default:
      return state;
  }
};
