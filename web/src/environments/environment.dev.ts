import { config } from "./config";
config.production = true;
config.apiUrl = `http://api.datadyne-dev.com:8080/${config.apiUrl}`;

export const environment = config;
