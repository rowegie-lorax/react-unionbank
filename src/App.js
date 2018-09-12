import React from "react";

// components
import Home from "./components/home/Home";

// Routes
import Routes from './router/routes';


class App extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div>
				<Home />
			</div>
		)
	}
}

export default App;