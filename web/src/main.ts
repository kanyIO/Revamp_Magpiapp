import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { LicenseManager } from "@ag-grid-enterprise/all-modules";

import { environment } from "./environments/environment";
import { AppModule } from "./app/app.module";

if (environment.production) {
    enableProdMode();
}

LicenseManager.setLicenseKey(environment.agGrid.licenseKey);

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
