import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { createLogger } from "redux-logger";

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

if (process.env.NODE_ENV !== "production") {
  middleware.push(
    createLogger({
      collapsed: true
    })
  );
}

export const store = createStore(rootReducer, compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__&&
window.__REDUX_DEVTOOLS_EXTENSION__()
));

sagaMiddleware.run(rootSaga);
