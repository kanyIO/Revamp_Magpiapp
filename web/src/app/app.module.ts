import { NgModule } from "@angular/core";

import { CoreModule } from "src/core/core.module";
import { SharedModule } from "src/shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [CoreModule, SharedModule, AppRoutingModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
