import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";

import { SharedModule } from "src/shared/shared.module";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginState } from "./store/login.state";

import { LoginService } from "./services/login.service";
import { LoginComponent } from "./login.component";

@NgModule({
    imports: [SharedModule, LoginRoutingModule, NgxsModule.forFeature([LoginState])],
    declarations: [LoginComponent],
    providers: [LoginService],
})
export class LoginModule {}
