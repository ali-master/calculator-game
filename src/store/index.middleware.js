import createSagaMiddleware from "redux-saga";
// Create an instance of redux saga middleware to observe all dispatched actions by components or any other palces
export const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
// If we were on the development environment we push the redux-logger middleware to the middlewares's array
if (process.env.NODE_ENV === "development") {
	const { createLogger } = require("redux-logger");
	middlewares.push(createLogger({ collapsed: true }));
}

export default middlewares;
