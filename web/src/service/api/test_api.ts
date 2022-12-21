import { ResultModel } from "src/model/result_model";
import util from "src/util/util";
import Api from "../api";

export default class TestApi extends Api {
    async getTest(params: any) {
        const res = await super.get("/test/param", params);

        const rm: ResultModel = res.data;

        console.log({ rm });

        if (util.checkResult(rm)) {
            return rm.data;
        } else {
            util.toast({ msg: util.checkMsg(rm) });
        }
    }

    async postTest(model: any) {
        const res = await super.post("/test/send/data", model);

        const rm: ResultModel = res.data;

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

        const res = await super.post("/test/send/formdata", formData, { headers: { "Content-Type": "multipart/form-data" }, });

        const rm: ResultModel = res.data;

        console.log({ rm });

        if (util.checkResult(rm)) {
            return rm.data;
        } else {
            util.toast({ msg: util.checkMsg(rm) });
        }
    }
}
