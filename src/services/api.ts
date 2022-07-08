import axios from 'axios';

import { API_LINK } from '../shared/constants/apiLink';

export const api = axios.create({
	baseURL: API_LINK,
});
