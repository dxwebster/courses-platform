import { combineReducers } from 'redux';

import { course } from './course/reducer';
import { auth } from './auth/reducer';

export default combineReducers({
  course,
  auth
});
