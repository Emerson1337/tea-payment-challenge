export const setLocalStorage = (city: string) => {
	const historyNavigation = getHistoryNavigation();

	const navigation = historyNavigation.length
		? stringToArray(historyNavigation)
		: [];

	if (!navigation.includes(city)) navigation.unshift(city);

	localStorage.setItem('navigation', `${navigation.toString()}`);
};

export const getHistoryNavigationArray = () => {
	return stringToArray(getHistoryNavigation());
};

const getHistoryNavigation = () => {
	return localStorage.getItem('navigation') || '';
};

const stringToArray = (historyNavigation: string) => {
	return historyNavigation.split(',');
};
