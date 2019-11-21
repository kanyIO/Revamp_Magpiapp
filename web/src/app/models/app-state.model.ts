import { Environment } from "src/environments/config";

export interface IAppStateModel {
    environment: Environment;
    currentLanguage: string;
    languages: string[];
}
