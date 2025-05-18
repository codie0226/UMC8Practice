import { StatusCodes } from "http-status-codes";
export class DuplicateDataError extends Error{
    errorCode = 'E001';
    constructor(reason, data){
        super(reason);
        this.reason = reason || '이미 존재하는 데이터입니다.';
        this.data = data;
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

export class NoDataFoundError extends Error{
    errorCode = 'E002';
    //statusCode = StatusCodes.NOT_FOUND
    constructor(reason, data){
        super(reason);
        this.reason = reason || '데이터를 찾을 수 없습니다.';
        this.data = data;
    }
}