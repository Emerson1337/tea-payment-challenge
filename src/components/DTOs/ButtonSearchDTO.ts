import React from 'react';
export interface ButtonSearchDTO {
	children: React.ReactNode;
	searchEvent: (city: React.ReactNode) => void;
	active: boolean;
}
