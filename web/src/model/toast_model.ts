export interface ToastModel {
    duration?: number;
    show?: boolean;
    title?: string;
    msg: string | undefined;
    isLoading?: boolean;
}
