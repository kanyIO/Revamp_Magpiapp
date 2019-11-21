import { NgModule } from "@angular/core";

import { SharedModule } from "src/shared/shared.module";
import { MessagingRoutingModule } from "./messaging-routing.module";

import { MessagingComponent } from "./messaging.component";

@NgModule({
    imports: [SharedModule, MessagingRoutingModule],
    declarations: [MessagingComponent],
})
export class MessagingModule {}
