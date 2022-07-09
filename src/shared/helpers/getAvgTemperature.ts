export const averageTemperature = (max: number, min: number) => {
	return ((Number(max) + Number(min)) / 2).toFixed(2);
};
