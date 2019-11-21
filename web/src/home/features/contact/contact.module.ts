import { NgModule } from "@angular/core";

import { SharedModule } from "src/shared/shared.module";
import { ContactRoutingModule } from "./contact-routing.module";

import { ContactComponent } from "./contact.component";

@NgModule({
    imports: [SharedModule, ContactRoutingModule],
    declarations: [ContactComponent],
})
export class ContactModule {}
