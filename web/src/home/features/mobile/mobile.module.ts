import { NgModule } from "@angular/core";

import { SharedModule } from "src/shared/shared.module";
import { MobileRoutingModule } from "./mobile-routing.module";

import { MobileComponent } from "./mobile.component";

@NgModule({
    imports: [SharedModule, MobileRoutingModule],
    declarations: [MobileComponent],
})
export class MobileModule {}
