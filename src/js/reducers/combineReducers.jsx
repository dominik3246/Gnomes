import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import gnomeReducer from './gnomeReducer';

const rootReducer = combineReducers({
  gnomeReducer,
  form: formReducer,
});

export default rootReducer;
