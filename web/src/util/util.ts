import { ResultModel } from "src/model/result_model";
import { ToastModel } from "src/model/toast_model";
import { hide, showLoading, showToast } from "src/slices/toast_slice";
import store from "src/store";

const util = {
    checkResult: (rm: ResultModel) => {
        return rm?.result?.code === 1;
    },
    checkMsg: (rm: ResultModel) => {
        return rm?.result?.msg;
    },
    delay: (ms: number) => {
        // ms 만큼 딜레이
        return new Promise<void>((res) => {
            const timer = setTimeout(() => {
                res();
                clearTimeout(timer);
            }, ms);
        });
    },
    toast: (model: ToastModel) => {
        model.duration = model.duration ?? 1500;

        store.dispatch(showToast(model));

        util.delay(model.duration).then(() => {
            store.dispatch(hide());
        });
    },
    loading: (show: boolean) => {
        store.dispatch(showLoading({ show }));
    },
};

export default util;