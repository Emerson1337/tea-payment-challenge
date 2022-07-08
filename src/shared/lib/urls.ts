export const urls = {
	auth: {
		login: (): string => `/session`,
		auth: (): string => `/authenticatedUser`,
	},
	clients: {
		getClients: (): string => `/client`,
		showClient: (clientId: string): string => `/client/${clientId}`,
	},
};
