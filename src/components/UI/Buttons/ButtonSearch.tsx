import React from 'react';
import { ButtonSearchDTO } from '@components/DTOs/ButtonSearchDTO';
import styled from 'styled-components';

export function ButtonSearch({
	children,
	searchEvent,
	active,
}: ButtonSearchDTO) {
	return (
		<ButtonCity
			className={active ? 'active-button' : ''}
			onClick={() => searchEvent(children)}
		>
			{children}
		</ButtonCity>
	);
}

const ButtonCity = styled.button`
	border: none;
	width: 180px;
	height: 50px;

	background-color: transparent;

	font-size: 1.5rem;
	color: var(--semi-white-color);

	cursor: pointer;

	border: 2px solid var(--semi-white-color);

	margin: 10px;

	border-radius: 5px;

	:hover {
		background: var(--semi-white-color);
		color: var(--background-blue-color);
		transition: all 0.2s;
	}
`;
