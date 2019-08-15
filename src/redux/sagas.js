import constants from "./constants";
import { takeLatest, takeEvery, all } from "redux-saga/effects";

import {getInventoryRequest} from './Inventory/action';
import {getLoginRequest} from './user/userAction';

function* watchActions() {
 
    
    yield takeLatest(constants.GET_INVENTORY_REQUEST, getInventoryRequest);
    yield takeLatest(constants.GET_LOGIN_REQUEST, getLoginRequest);
}

export default function* rootSaga() {
    yield all([watchActions()]);
  }