import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Login } from '../pages/login';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Redirect to="/dashboard" />
				</Route>
				<Route path="/login" component={Login} />
			</Switch>
		</BrowserRouter>
	);
}
