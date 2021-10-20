/* eslint-disable prettier/prettier */
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "../reducers";

function renderWithRedux(
	ui,
	{
		initialState,
		store = createStore(
			reducers,
			initialState,
			compose(applyMiddleware(thunk))
		),
	} = {}
) {
	return {
		...render(<Provider store={store}>{ui}</Provider>),
		store,
	};
}

export * from "@testing-library/react";

export { renderWithRedux as render };
