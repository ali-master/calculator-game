import { createStore, applyMiddleware, compose } from "redux";
// Reducers
import reducers from "./index.reducer";
// Sagas
import sagas from "./index.sagas";
// Middlewares
import middlewares, { sagaMiddleware } from "./index.middleware";

// using redux-devtools composer or if it doesn't installed on user's browser then we will use redux native composer function
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Create store and also apply all middlewares such as Redux-devtools and redux-saga and redux-logger in this project
const appStore = createStore(reducers, {}, composeEnhancer(applyMiddleware(...middlewares)));
// Run reudx-saga middleware and apply all forked sagas that we have created
sagaMiddleware.run(sagas);

export default appStore;
