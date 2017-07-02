import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import general from './general';
import topic from './topic';
import author from './author';

export default combineReducers({
  router: routerReducer,
  general,
  topic,
  author,
});
