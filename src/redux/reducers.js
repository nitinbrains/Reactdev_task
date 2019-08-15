import { combineReducers } from "redux";
// import { reducer as formReducer } from 'redux-form'
import inventorydetails from './Inventory/reducer'
import logindetails from './user/userReducer'


const appReducer = combineReducers({
  inventorydetails,
  logindetails
});

const rootReducer = (state, action) => {
//   if (action.type === "LOGOUT") {
//     state = undefined;
//   }
  return appReducer(state, action);
};

export default rootReducer;
