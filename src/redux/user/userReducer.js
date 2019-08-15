import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";


const initialState = {
    logindata: {
      isLoading: false,
      isSuccess: false,
      isError: false,
      data: ""
    }
  };

  const handleLoginDataRequest = (state, action) =>
  update(state, {
    logindata: {
      isLoading: { $set: true },
      isSuccess: { $set: false },
      isError: { $set: false }
    }
  });
const handleLoginDataSuccess = (state, action) =>
  update(state, {
    logindata: {
      isLoading: { $set: false },
      isSuccess: { $set: true },
      isError: { $set: false },
      data: { $set: action.payload }
    }
  });
const handleLoginDataError = (state, action) =>
  update(state, {
    logindata: {
      isLoading: { $set: false },
      isSuccess: { $set: false },
      isError: { $set: true }
    }
  });
  
  
export default handleActions(
    {
      
      [constants.GET_LOGIN_REQUEST]: handleLoginDataRequest,
      [constants.GET_LOGIN_SUCCESS]: handleLoginDataSuccess,
      [constants.GET_LOGIN_ERROR]: handleLoginDataError,
     
    },
    initialState
  );