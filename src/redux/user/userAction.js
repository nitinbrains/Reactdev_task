import { toast } from "react-toastify";
import * as actions from "../actions";
import { call, put } from "redux-saga/effects";
import fireAjax from "../../services/fireAjax";


export function* getLoginRequest(action) {
//   console.log('here')
    try {
      let response;
      if (action.payload) {
        //   console.log(action.payload);
          
        // console.log('inside if')
        response = yield call(fireAjax, "POST_LOGIN", action.payload);
        // console.log(response,'response if')
        let res=response.data;
        let token=res.token
        localStorage.setItem('token',token)
      } else {
        // console.log('inside else')
        response = yield call(fireAjax, "POST_LOGIN");
        console.log(response.data,'response else')
      }
      if (response && response.status == 200) {
          
        // toast.success("Inventory Fetch Success");
        yield put(actions.getLoginSuccess(response.data));
      } else {
        yield put(actions.getLoginError());
      }
    } catch (error) {
      console.log(error,'catch errrr')
      yield put(actions.getLoginError());
    }
  }