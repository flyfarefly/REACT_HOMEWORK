import { combineReducers } from 'redux';
import contactsReducer from '../redusers/contactsReduser';

const rootReducer = combineReducers({
  contacts: contactsReducer
});

export default rootReducer;
