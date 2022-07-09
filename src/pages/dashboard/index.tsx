import React from 'react';
import styled from 'styled-components';
import { CityButton } from '@components/UI/CityButton/CityButton';
import { BsSearch } from 'react-icons/bs';

import './dashboard.scss';

export function WeatherDashboard() {
	return (
		<Background className="about-us">
			<Container>
				<CityInteraction>
					<SearchArea>
						<BsSearch className="icon-search" />
						<SearchCity />
					</SearchArea>
					<span className="history-title">Your city history:</span>
					<CityHistory>
						<CityButton>Fortaleza</CityButton>
						<CityButton>Fortaleza</CityButton>
						<CityButton>Fortaleza</CityButton>
						<CityButton>Fortaleza</CityButton>
						<CityButton>Fortaleza</CityButton>
						<CityButton>Fortaleza</CityButton>
						<CityButton>Fortaleza</CityButton>
					</CityHistory>
				</CityInteraction>
			</Container>
		</Background>
	);
}

const SearchArea = styled.div`
	.icon-search {
		position: absolute;
		top: 10vh;
		right: 22vw;
		font-size: 2.5rem;
		color: var(--background-blue-color);
	}
`;

const Background = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	justify-content: center;

	margin-top: 0px;

	background: var(--background-blue-color-opacity);

	overflow: hidden;
`;

const Container = styled.div`
	padding: 20px;
	width: 80vw;

	display: flex;
	justify-content: center;
`;

const CityInteraction = styled.div`
	width: 70vw;
	height: 12vh;

	border-radius: 1px;
	padding: 10px;
	margin: 1rem;

	box-sizing: border-box;

	/* background-image: linear-gradient(180deg, #ede9dc, #ebe5e9); */
`;

const SearchCity = styled.input`
	outline: none;
	border: none;
	background-color: #ffffff;
	border-radius: 10px;
	width: 92%;
	padding: 1rem;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	margin: 1rem;
	font-size: 1.6rem;
	text-align: center;
`;

const CityHistory = styled.div`
	overflow-x: scroll;

	::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: var(--background-blue-color-opacity);
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: var(--semi-white-colo);
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: var(--semi-white-colo);
	}
`;
