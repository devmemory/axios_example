import util from "src/util/util";
import Api from "../api";
import { ResultModel } from "src/model/ResultModel";
import { TestModel } from "src/model/TestModel";

export default class TestApi extends Api {
    async getTest(params: any) {
        const res = await super.get<ResultModel<TestModel>>("/api/test/param", params);

        const rm = res.data;

        if (util.checkResult(rm)) {
            return rm.data;
        } else {
            util.toast({ msg: util.checkMsg(rm) });
        }
    }

    async postTest(model: any) {
        const res = await super.post<ResultModel<TestModel>>("/api/test/send/data", model);

        const rm = res.data;

        if (util.checkResult(rm)) {
            return rm.data;
        } else {
            util.toast({ msg: util.checkMsg(rm) });
        }
    }

    async formDataTest(model: any) {
        const formData = new FormData();

        if (model.a !== undefined) {

            formData.append('a', model.a);
        }
        if (model.b !== undefined) {
            formData.append('b', model.b);
        }

        const res = await super.post<ResultModel<TestModel>>("/api/test/send/formdata", formData, { headers: { "Content-Type": "multipart/form-data" }, });

        const rm = res.data;

        if (util.checkResult(rm)) {
            return rm.data;
        } else {
            util.toast({ msg: util.checkMsg(rm) });
        }
    }
}
