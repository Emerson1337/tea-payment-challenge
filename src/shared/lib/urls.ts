import { GetForecastDTO } from '@components/DTOs/GetForecastDTO';
import { GetCityDTO } from '@components/DTOs/GetCityDTO';

const API_KEY = 'e971dbbb91c64f4ca40546388c0e9c10';

export const urls = {
	cityWeather: {
		getCityWeather: ({ currentCity, unit, language }: GetCityDTO): string =>
			`/weather?q=${currentCity}&units=${unit}&appid=${API_KEY}&lang=${language}`,
	},
	forecastWeather: {
		getFiveDaysForecast: ({
			latitudine,
			longitudine,
		}: GetForecastDTO): string =>
			`/onecall?lat=${latitudine}&lon=${longitudine}&exclude=current,hourly,minutely,alerts&units=metric&appid=${API_KEY}`,
	},
	icons: {
		getIconWeather: (icon: string): string => `/wn/${icon}.png`,
	},
};
