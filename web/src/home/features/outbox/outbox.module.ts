import { NgModule } from "@angular/core";

import { SharedModule } from "src/shared/shared.module";
import { OutboxRoutingModule } from "./outbox-routing.module";

import { OutboxComponent } from "./outbox.component";

@NgModule({
    imports: [SharedModule, OutboxRoutingModule],
    declarations: [OutboxComponent],
})
export class OutboxModule {}
