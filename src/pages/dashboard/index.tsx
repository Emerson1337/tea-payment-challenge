import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

import { ButtonSearch } from '@components/UI/Buttons/ButtonSearch';
import { CardWeather } from '@pages/dashboard/components/CardWeather/CardWeather';

import './dashboard.scss';

export function WeatherDashboard() {
	return (
		<Background className="about-us">
			<Container>
				<CityInteraction>
					<SearchArea>
						<SearchCity placeholder="Enter the city" />
						<BsSearch className="icon-search" />
					</SearchArea>
					<span className="history-title">Your last search:</span>
					<CityHistory>
						<ButtonSearch>Fortaleza</ButtonSearch>
						<ButtonSearch>Fortaleza</ButtonSearch>
						<ButtonSearch>Fortaleza</ButtonSearch>
						<ButtonSearch>Fortaleza</ButtonSearch>
						<ButtonSearch>Fortaleza</ButtonSearch>
					</CityHistory>
					<CityWeatherList>
						<CardWeather
							dayWeek="Monday"
							icon="da.png"
							maxTemp={23}
							minTemp={32}
							temp={25}
							windDir={'SW'}
							windSpeed={2}
						/>
					</CityWeatherList>
				</CityInteraction>
			</Container>
		</Background>
	);
}

const SearchArea = styled.div`
	display: flex;
	align-items: center;

	background-color: #ffffff;
	border-radius: 10px;

	padding: 0 30px;

	margin-bottom: 20px;

	.icon-search {
		font-size: 2.5rem;
		cursor: pointer;
		color: var(--background-blue-color);
	}
`;

const Background = styled.div`
	height: 100vh;

	display: flex;
	justify-content: center;

	margin-top: 0px;
	background: var(--background-blue-color-opacity);
	overflow: hidden;
`;

const Container = styled.div`
	padding: 20px;
	width: 90vw;

	display: flex;
	justify-content: center;
`;

const CityInteraction = styled.div`
	width: 70vw;
	height: 12vh;

	border-radius: 1px;
	padding: 10px;
	margin: 20px;

	display: flex;
	flex-direction: column;
	align-items: center;

	box-sizing: border-box;
`;

const SearchCity = styled.input`
	outline: none;
	border: none;
	width: 92%;
	padding-left: 35.2px;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	margin: 1rem;
	font-size: 1.6rem;
	text-align: center;
`;

const CityHistory = styled.div`
	display: flex;
	justify-content: space-between;
`;

const CityWeatherList = styled.section`
	margin-top: 50px;

	width: 90vw;

	display: flex;
	justify-content: center;
	align-items: center;
`;
