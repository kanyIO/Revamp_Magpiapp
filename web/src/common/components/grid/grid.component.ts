import { ViewChild } from "@angular/core";
import { Module, GridOptions, ColDef } from "@ag-grid-community/all-modules";
import { AllEnterpriseModules } from "@ag-grid-enterprise/all-modules";
import { AgGridAngular } from "@ag-grid-community/angular";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { IListRequest, IListData, IResponse } from "src/common/models/response.model";
import { PageSizeStatusPanelComponent } from "src/shared/components/ag-grid/page-size-status-panel/page-size-status-panel.component";

export abstract class GridComponent {
    abstract columnDefs: ColDef[];
    abstract dataProperty: string;

    @ViewChild("agGrid", { static: false }) agGrid: AgGridAngular;
    searchQuery = "";
    modules: Module[] = AllEnterpriseModules;
    gridOptions: GridOptions = {
        suppressPropertyNamesCheck: true,
        defaultColDef: {
            sortable: true,
        },
        cacheQuickFilter: true,
        rowModelType: "serverSide",
        serverSideDatasource: {
            getRows: params => {
                const getRequest = params.request;
                const { startRow, endRow, sortModel } = getRequest;
                const request: IListRequest = { start: startRow, limit: endRow, searchQuery: this.searchQuery };

                if (sortModel && sortModel.length) {
                    request.sort = sortModel[0].colId;
                    request.order = sortModel[0].sort;
                }

                this.getData(request)
                    .pipe(
                        map(response => response.data || null),
                        catchError(() => of(null)),
                    )
                    .subscribe((listData: IListData) => {
                        if (listData) {
                            params.successCallback(listData[this.dataProperty], listData.total);
                        } else {
                            params.failCallback();
                        }
                    });
            },
        },
        statusBar: {
            statusPanels: [{ statusPanel: "pageSizeStatusPanelComponent" }],
        },
        pagination: true,
        paginationPageSize: 10,
        cacheBlockSize: 10,
        frameworkComponents: {
            pageSizeStatusPanelComponent: PageSizeStatusPanelComponent,
        },
    };

    onSearchQuery() {
        this.agGrid.api.purgeServerSideCache();
    }

    abstract getData(request: IListRequest): Observable<IResponse>;
}
