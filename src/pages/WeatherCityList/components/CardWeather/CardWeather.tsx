import { CardWeatherDTO } from '@pages/WeatherCityList/DTOs/CardWeatherDTO';
import { API_ICON_WATHER_LINK } from '@shared/constants/apiLink';
import { urls as apiUrls } from '@shared/lib/urls';
import React from 'react';
import styled from 'styled-components';

export function CardWeather({
	dayWeek,
	icon,
	temp,
	minTemp,
	maxTemp,
	windSpeed,
	windDir,
}: CardWeatherDTO) {
	return (
		<CardWeatherStructure>
			<CardTitle>{dayWeek}</CardTitle>
			<CardBody>
				<img
					src={API_ICON_WATHER_LINK + apiUrls.icons.getIconWeather(icon)}
					alt=""
				/>
				<p>{temp}º</p>
			</CardBody>
			<CardDescription>
				<div className="group-info">
					<div>
						<div className="title-info">min</div>
						<div>{minTemp}º</div>
					</div>
					<div>
						<div className="title-info">max</div>
						<div>{maxTemp}º</div>
					</div>
				</div>
				<div className="group-info">
					<div>
						<div className="title-info">wind speed</div>
						<div>{windSpeed}</div>
					</div>
					<div>
						<div className="title-info">wind dir</div>
						<div>{windDir}</div>
					</div>
				</div>
			</CardDescription>
		</CardWeatherStructure>
	);
}

const CardWeatherStructure = styled.div`
	width: 300px;
	height: 400px;

	box-sizing: border-box;

	background-color: transparent;

	font-size: 1.5rem;
	background: linear-gradient(180deg, #ede9dc, #ebe5e9);

	cursor: pointer;

	bottom: 0;
	border: 2px solid transparent;
	border-radius: 5px;

	padding: 5px;
	margin: 10px;

	:hover {
		box-shadow: 2px 5px var(--light-dark-color);
		transition: all 0.2s;
	}
`;

const CardTitle = styled.div`
	font-weight: bold;
	text-align: center;
	margin: 10px 0;
`;

const CardBody = styled.div`
	font-weight: bold;

	text-align: center;
	margin: 10px 0;
`;

const CardDescription = styled.div`
	text-align: center;
	margin: 10px 0;

	.group-info {
		margin-bottom: 20px;
		display: flex;
		justify-content: space-around;
	}

	.title-info {
		color: var(--light-dark-color);
	}
`;
