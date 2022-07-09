import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

import { ButtonSearch } from '@components/UI/Buttons/ButtonSearch';
import { CardWeather } from '@pages/dashboard/components/CardWeather/CardWeather';

import './dashboard.scss';
import { apiWeather } from '@services/api';
import { urls as apiUrls } from '@shared/lib/urls';
import { getCardinal } from '@shared/helpers/getCardinalDirection';
import { averageTemperature } from '@shared/helpers/getAvgTemperature';

export function WeatherDashboard() {
	const [city, setCity] = useState<string>('');
	const [weatherCityInfo, setWeatherCityInfo] = useState<any>();

	const searchByCity = async (cityToSearch: string) => {
		const cityWeatherInfo: any = await getCityWeatherInfo(cityToSearch);
		getForecastWeather(
			cityWeatherInfo.data.coord.lat,
			cityWeatherInfo.data.coord.lon
		);
		return;
	};

	const getCityWeatherInfo = async (currentCity: string) => {
		const unit = 'metric';
		const language = 'en';

		const weatherCityData = await apiWeather.get(
			apiUrls.cityWeather.getCityWeather({ currentCity, unit, language })
		);

		return weatherCityData;
	};

	const getForecastWeather = async (
		latitudine: string,
		longitudine: string
	) => {
		const weatherCityData = await apiWeather.get(
			apiUrls.forecastWeather.getFiveDaysForecast({
				latitudine,
				longitudine,
			})
		);

		setWeatherCityInfo(weatherCityData.data.daily.slice(0, -2));
	};

	return (
		<Background className="about-us">
			<Container>
				<CityInteraction>
					<SearchArea>
						<SearchCity
							onChange={(data: React.ChangeEvent<HTMLInputElement>) =>
								setCity(data.target.value)
							}
							placeholder="Enter the city"
						/>
						<BsSearch
							onClick={() => searchByCity(city)}
							className="icon-search"
						/>
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
						{weatherCityInfo &&
							weatherCityInfo.map((eachDayWeather: any, key: number) => {
								return (
									<CardWeather
										key={key}
										dayWeek={new Date(eachDayWeather.dt * 1000).toLocaleString(
											'default',
											{
												weekday: 'long',
											}
										)}
										icon={eachDayWeather.weather[0].icon}
										maxTemp={eachDayWeather.temp.max}
										minTemp={eachDayWeather.temp.min}
										temp={averageTemperature(
											eachDayWeather.temp.max,
											eachDayWeather.temp.min
										)}
										windDir={getCardinal(eachDayWeather.wind_deg)}
										windSpeed={eachDayWeather.wind_speed}
									/>
								);
							})}
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
