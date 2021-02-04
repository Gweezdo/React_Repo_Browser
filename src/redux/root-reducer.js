import { combineReducers } from 'redux';
//import all your reducers here
import repoReducer from '../redux/repo/repo.reducer';
import orgReducer from '../redux/org/org.reducer'

export default combineReducers({
  repos: repoReducer,
  orgs: orgReducer,
});
