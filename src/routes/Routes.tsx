import { WeatherDashboard } from '@pages/WeatherCityList';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Redirect to="/weather-city" />
				</Route>
				<Route path="/weather-city" component={WeatherDashboard} />
			</Switch>
		</BrowserRouter>
	);
}
