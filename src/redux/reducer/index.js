import { combineReducers } from 'redux';

import localization from './localization';
import user from './user';

const reducer = combineReducers({
  localization,
  user,
});

export default reducer;
