import api, { API_STATUS } from '../../util/api';

// Actions
const REQUEST = 'topic/REQUEST';
const SUCCESS = 'topic/SUCCESS';
const FAIL = 'topic/FAIL';

// Action Creators
export const success = (topic, data) => ({
  type: SUCCESS,
  topic,
  data,
});

export const fail = (topic, error) => ({
  type: FAIL,
  topic,
  error,
});

export const request = topic => async dispatch => {
  dispatch({ type: REQUEST, topic });

  try {
    const { data, ok, problem } = await api.get(`/topic?topic=${topic.toLowerCase()}`);

    if (!ok) {
      dispatch(fail(problem));
      return;
    }

    dispatch(success(topic, data));
  } catch (err) {
    dispatch(fail(topic, err.message));
  }
};

// Reducer
export default (state = {}, { type, topic, data, error }) => {
  switch (type) {
    case REQUEST:
      return {
        ...state,
        [topic]: {
          status: API_STATUS.LOADING,
          data: {},
          error: null,
        },
      };
    case SUCCESS:
      return {
        ...state,
        [topic]: {
          status: API_STATUS.FETCHED,
          data,
          error: null,
        },
      };
    case FAIL:
      return {
        ...state,
        [topic]: {
          status: API_STATUS.FAILED,
          data: {},
          error,
        },
      };
    default:
      return state;
  }
};
