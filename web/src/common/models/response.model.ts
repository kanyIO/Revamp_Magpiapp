export interface IError {
    code: number;
    trace: string;
}

export interface IResponse {
    status: number;
    data?: any;
    error?: IError;
}

export interface IListRequest {
    start?: number;
    limit?: number;
    searchQuery?: string;
    sort?: string;
    order?: string;
}

export interface IListData {
    start: number;
    limit: number;
    total: number;
}
