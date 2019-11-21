import { IListData, IResponse } from "src/common/models/response.model";
import { IMinimalOwner } from "src/common/models/owner.model";

export interface IForm {
    id: number;
    externalId: string;
    standardReportId: number;
    name: string;
    description: string;
    isSubForm: boolean;
    owner: IMinimalOwner;
    subformsCount: 0;
    recordCount: number;
    lastDataAdded: string;
    dateCreated: string;
    lastUpdated: string;
}

export interface IFormListData extends IListData {
    forms: IForm[];
}

export interface IFormListResponse extends IResponse {
    data: IFormListData;
}
