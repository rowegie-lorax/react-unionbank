import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'

// Root component
import App from "./App";


const render = () => {
	ReactDOM.render(
		// <BrowserRouter>
			<App name="before"/>
		// </BrowserRouter>,
		document.getElementById("index")
	);
};

render();

// Hot module replacement API
if (module.hot) {
	module.hot.accept('./App', render)
}