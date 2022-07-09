import { CityButtonDTO } from '@components/DTOs/CityButtonDTO';
import React from 'react';
import styled from 'styled-components';

export function CityButton({ children }: CityButtonDTO) {
	return <ButtonCity>{children}</ButtonCity>;
}

const ButtonCity = styled.button`
	border: none;
	width: 200px;
	height: 50px;

	background-color: transparent;

	font-size: 2rem;
	color: var(--semi-white-color);

	cursor: pointer;

	border: 2px solid var(--semi-white-color);

	margin: 20px;

	border-radius: 5px;

	:hover {
		background: var(--semi-white-color);
		color: var(--background-blue-color);
		transition: all 0.2s;
	}
`;
