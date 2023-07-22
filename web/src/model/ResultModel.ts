export interface ResultModel<T extends any> {
    data?: T,
    result?: {
        code: number,
        msg: string | undefined;
    };
}
