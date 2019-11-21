import { NgModule } from "@angular/core";

import { SharedModule } from "src/shared/shared.module";
import { FormRoutingModule } from "./form-routing.module";

import { FormService } from "./services/form.service";
import { FormComponent } from "./form.component";

@NgModule({
    imports: [SharedModule, FormRoutingModule],
    declarations: [FormComponent],
    providers: [FormService],
})
export class FormModule {}
