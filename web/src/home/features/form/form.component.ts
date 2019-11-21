import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ColDef } from "@ag-grid-community/core";
import { Observable } from "rxjs";

import { PropertyValueGetter, ArrayValueGetter } from "src/common/utils/ag-grid.util";

import { IListRequest } from "src/common/models/response.model";
import { IFormListResponse } from "./models/form.model";
import { FormService } from "./services/form.service";

import { GridComponent } from "src/common/components/grid/grid.component";

@Component({
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.scss"],
})
export class FormComponent extends GridComponent {
    columnDefs: ColDef[] = [
        { headerName: this.translateService.instant("home.form.col.name"), field: "name" },
        { headerName: this.translateService.instant("home.form.col.last.modified"), field: "lastUpdated" },
        {
            headerName: this.translateService.instant("home.form.col.last.added"),
            field: "lastDataAdded",
            sortable: false,
        },
        { headerName: this.translateService.instant("home.form.col.count"), field: "recordCount", sortable: false },
        {
            headerName: this.translateService.instant("home.form.col.owner"),
            field: "owner",
            sortable: false,
            valueGetter: PropertyValueGetter("owner", "email"),
        },
        {
            headerName: this.translateService.instant("home.form.col.tags"),
            field: "tags",
            sortable: false,
            valueGetter: ArrayValueGetter("tags"),
        },
    ];
    dataProperty = "forms";

    constructor(private translateService: TranslateService, private formService: FormService) {
        super();
    }

    getData(request: IListRequest): Observable<IFormListResponse> {
        return this.formService.getAll(request);
    }
}
