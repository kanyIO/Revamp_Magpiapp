import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";

import { SharedModule } from "src/shared/shared.module";
import { ResetPasswordRoutingModule } from "./reset-password-routing.module";
import { ResetPasswordState } from "./store/reset-password.state";

import { ResetPasswordService } from "./services/reset-password.service";
import { ResetPasswordComponent } from "./reset-password.component";

@NgModule({
    imports: [SharedModule, ResetPasswordRoutingModule, NgxsModule.forFeature([ResetPasswordState])],
    declarations: [ResetPasswordComponent],
    providers: [ResetPasswordService],
})
export class ResetPasswordModule {}
