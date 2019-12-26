import React from "react";
import ReactDOM from "react-dom";
// Main application component
import App from "./App";
// Service-worker
import * as serviceWorker from "./serviceWorker";
// Store utilites and instance
import { Provider } from "react-redux";
import appStore from "./store";
// Styles
import "./styles/index.css";

ReactDOM.render(
	<Provider store={appStore}>
		<App />
	</Provider>,
	document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
