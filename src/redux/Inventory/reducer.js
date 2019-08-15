import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";


const initialState = {
    inventorydata: {
      isLoading: false,
      isSuccess: false,
      isError: false,
      data: []
    }
  };

  const handleInventoryDataRequest = (state, action) =>
  update(state, {
    inventorydata: {
      isLoading: { $set: true },
      isSuccess: { $set: false },
      isError: { $set: false }
    }
  });
const handleInventoryDataSuccess = (state, action) =>
  update(state, {
    inventorydata: {
      isLoading: { $set: false },
      isSuccess: { $set: true },
      isError: { $set: false },
      data: { $set: action.payload }
    }
  });
const handleInventoryDataError = (state, action) =>
  update(state, {
    inventorydata: {
      isLoading: { $set: false },
      isSuccess: { $set: false },
      isError: { $set: true }
    }
  });
  
  
export default handleActions(
    {
      
      [constants.GET_INVENTORY_REQUEST]: handleInventoryDataRequest,
      [constants.GET_INVENTORY_SUCCESS]: handleInventoryDataSuccess,
      [constants.GET_INVENTORY_ERROR]: handleInventoryDataError,
     
    },
    initialState
  );