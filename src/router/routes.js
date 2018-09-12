import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import App from './../App';
import Login from './../components/login/Login';
import TodoApp from './../components/TodoApp';


const Routes = () => (
	<main>
		<Switch>
			<Route exact path='/' component={App}/>
			<Route path='/login' component={Login}/>
			<Route path='/todos' component={TodoApp}/>
		</Switch>
	</main>
)

export default Routes;	