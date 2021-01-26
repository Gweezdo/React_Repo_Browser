import { combineReducers } from 'redux';

import repoReducer from '../redux/repo/repo.reducer';

export default combineReducers({
  repos: repoReducer,
});

;