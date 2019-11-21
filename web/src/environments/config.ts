import { version } from "../../package.json";

export const config = {
    version,
    production: false,
    apiUrl: "api/",
    agGrid: {
        licenseKey:
            "Evaluation_License_Not_For_Production_30_December_2019__MTU3NzY2NDAwMDAwMA==82f726e0f9e347787984f7c5e16cebcc",
    },
    recaptcha: {
        siteKey: "6LeeFbYUAAAAAOWCE8unssvi6b6-vnsTbXJRginz",
    },
};

export type Environment = typeof config;
