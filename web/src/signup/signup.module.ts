import { NgModule } from "@angular/core";

import { SharedModule } from "src/shared/shared.module";
import { SignupRoutingModule } from "./signup-routing.module";

import { SignupComponent } from "./signup.component";

@NgModule({
    imports: [SharedModule, SignupRoutingModule],
    declarations: [SignupComponent],
})
export class SignupModule {}
