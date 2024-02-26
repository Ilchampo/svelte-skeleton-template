const config = {
	port: import.meta.env.VITE_PORT as number,
	environment: import.meta.env.VITE_ENVIRONMENT as string,
	projectName: import.meta.env.VITE_PROJECT_NAME as string,
	i18n: import.meta.env.VITE_I18N as string,
};

config.projectName = config.projectName ? config.projectName.replace('_', ' ') : '';

export default config;
