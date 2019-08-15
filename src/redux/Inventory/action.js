import { toast } from "react-toastify";
import * as actions from "../actions";
import { call, put } from "redux-saga/effects";
import fireAjax from "../../services/fireAjax";


export function* getInventoryRequest(action) {
  console.log('here')
    try {
      let response;
      if (action.payload) {
       // console.log('inside if')
        response = yield call(fireAjax, "GET");
      //  console.log(response,'response if')
      } else {
       // console.log('inside else')
        response = yield call(fireAjax, "GET");
       // console.log(response,'response else')
      }
      if (response && response.status == 200) {
        // toast.success("Inventory Fetch Success");
        yield put(actions.getInventorySuccess(response.data));
      } else {
        yield put(actions.getInventoryError());
      }
    } catch (error) {
     // console.log(error,'catch errrr')
      yield put(actions.getInventoryError());
    }
  }