export const clearLocalStorageFrom = (localStorageName: string) => {
	return localStorage.removeItem(localStorageName);
};
