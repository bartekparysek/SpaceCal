import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
// 	reducers,
// 	composeEnhancers(applyMiddleware(reduxThunk))
// );

ReactDOM.render(
	<App />,
	document.querySelector("#root")
);

// if (window.Cypress) {
// 	window.store = store;
// }
