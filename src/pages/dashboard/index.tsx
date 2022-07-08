import React from 'react';
import styled from 'styled-components';

import './dashboard.scss';

export function WeatherDashboard() {
	return (
		<DashboardScreen className="about-us">
			<Content></Content>
		</DashboardScreen>
	);
}

const DashboardScreen = styled.div`
	margin-top: 0px;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--dark-color);
	overflow: hidden;
`;

const Content = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	margin-left: -60px;

	transition: 500ms;

	margin-top: 150px;
`;

const SearchZone = styled.div`
	display: flex;
	justify-content: right;
	margin-right: 110px;

	margin-bottom: 50px;
`;
