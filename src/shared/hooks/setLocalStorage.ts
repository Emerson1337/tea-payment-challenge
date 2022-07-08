export const setLocalStorage = (token: string) => {
	localStorage.setItem('navigation', `bearer ${token}`);
};
