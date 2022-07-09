import axios from 'axios';

import { API_WEATHER_LINK } from '../shared/constants/apiLink';
import { API_ICON_WATHER_LINK } from '../shared/constants/apiLink';

export const apiWeather = axios.create({
	baseURL: API_WEATHER_LINK,
});

export const apiWeatherIcon = axios.create({
	baseURL: API_ICON_WATHER_LINK,
});
