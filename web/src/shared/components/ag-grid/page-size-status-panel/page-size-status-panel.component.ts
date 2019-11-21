import { Component } from "@angular/core";
import { IStatusPanelParams } from "@ag-grid-enterprise/all-modules";

@Component({
    templateUrl: "./page-size-status-panel.component.html",
})
export class PageSizeStatusPanelComponent {
    sizes: number[] = [10, 25, 50, 100];
    selectedSize: number;

    private params: IStatusPanelParams;

    agInit(params: IStatusPanelParams): void {
        this.params = params;
        this.selectedSize = this.params.api.paginationGetPageSize();
    }

    onChange(event: number) {
        this.selectedSize = event;
        this.params.api.paginationSetPageSize(event);
    }
}
