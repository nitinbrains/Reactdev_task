import { createAction } from "redux-actions";
import constants from "./constants";

export const getInventoryRequest = createAction(constants.GET_INVENTORY_REQUEST);
export const getInventorySuccess = createAction(constants.GET_INVENTORY_SUCCESS);
export const getInventoryError = createAction(constants.GET_INVENTORY_ERROR);

export const getLoginRequest = createAction(constants.GET_LOGIN_REQUEST)
export const getLoginSuccess = createAction(constants.GET_LOGIN_SUCCESS)
export const getLoginError = createAction(constants.GET_LOGIN_ERROR)