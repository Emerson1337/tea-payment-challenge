import NotFound from '@assets/images/not-found.png';
import { ButtonSearch } from '@components/UI/Buttons/ButtonSearch';
import { CardWeather } from '@pages/WeatherCityList/components/CardWeather/CardWeather';
import { apiWeather } from '@services/api';
import { averageTemperature } from '@shared/helpers/getAvgTemperature';
import { getCardinal } from '@shared/helpers/getCardinalDirection';
import { getHistoryNavigationArray, setLocalStorage } from '@shared/hooks/setLocalStorage';
import { urls as apiUrls } from '@shared/lib/urls';
import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';

import './weatherCityList.scss';

export function WeatherDashboard() {
	const [currentCity, setCurrentCity] = useState<string>('');
	const [weatherCityInfo, setWeatherCityInfo] = useState<any>();
	const [cityHistory, setCityHistory] = useState<Array<string>>();
	const [searchError, setSearchError] = useState<boolean>(false);

	const getHistorySearch = () => {
		const historyCity = getHistoryNavigationArray();

		// If doesn't exists history search
		historyCity[0].length && setCityHistory(lastFiveCityHistory(historyCity));
	};

	useEffect(() => {
		getHistorySearch();
	}, []);

	const searchByCity = async (cityToSearch: string) => {
		setCurrentCity(cityToSearch);

		const cityWeatherInfo: any = await getCityWeatherInfo(cityToSearch).catch(
			(error) => {
				return error;
			}
		);

		if (cityWeatherInfo.response?.data.cod == 404) return setSearchError(true);
		else setSearchError(false);

		setLocalStorage(cityToSearch);

		getHistorySearch();

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

	const lastFiveCityHistory = (allHistory: Array<string>) => {
		return allHistory.slice(0, 5);
	};

	return (
		<Background className="about-us">
			<Container>
				<CityInteraction>
					<span className="title-page">Get weather city info</span>
					<SearchArea>
						<SearchCity
							onBlur={(data: React.ChangeEvent<HTMLInputElement>) =>
								setCurrentCity(data.target.value)
							}
							placeholder="Enter the city"
						/>
						<BsSearch
							onClick={() => searchByCity(currentCity)}
							className="icon-search"
						/>
					</SearchArea>
					<span className="history-title">Your last search:</span>
					<CityHistory>
						{cityHistory?.map((city: string, key: number) => {
							return (
								<ButtonSearch
									active={city == currentCity ? true : false}
									searchEvent={() => searchByCity(city)}
									key={key}
								>
									{city}
								</ButtonSearch>
							);
						})}
					</CityHistory>
					{currentCity && (
						<span className="search-title">Results for: {currentCity}</span>
					)}
					<CityWeatherList>
						{!searchError ? (
							weatherCityInfo &&
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
							})
						) : (
							<ErrorHandling>
								<img src={NotFound} alt="notFound" />
								<span className="not-found-caption">City not found!</span>
							</ErrorHandling>
						)}
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

	.search-title,
	.title-page {
		margin-top: 30px;
		color: var(--semi-white-color);
		font-weight: bold;
	}

	.title-page {
		margin-top: 0px;
		margin-bottom: 10px;
	}

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
	margin-top: 20px;

	width: 90vw;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const ErrorHandling = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;

	.not-found-caption {
		font-weight: bold;
		font-size: 2rem;
		color: var(--semi-white-color);
	}
`;
