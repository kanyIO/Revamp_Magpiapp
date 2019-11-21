import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";

import { SharedModule } from "src/shared/shared.module";
import { ForgotPasswordRoutingModule } from "./forgot-password-routing.module";
import { ForgotPasswordState } from "./store/forgot-password.state";

import { ForgotPasswordService } from "./services/forgot-password.service";
import { ForgotPasswordComponent } from "./forgot-password.component";

@NgModule({
    imports: [SharedModule, ForgotPasswordRoutingModule, NgxsModule.forFeature([ForgotPasswordState])],
    declarations: [ForgotPasswordComponent],
    providers: [ForgotPasswordService],
})
export class ForgotPasswordModule {}
