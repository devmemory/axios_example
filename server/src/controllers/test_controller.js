const formidable = require('formidable');

module.exports = class TestController {
    getParam(req, res) {
        const { a } = req.query;

        if (a === undefined || a === '') {
            const rm = {
                result: { code: -1, msg: '파라미터 부족' }
            };

            res.send(rm);

            return;
        }

        const rm = {
            data: { param: a },
            result: { code: 1 }
        };

        res.send(rm);
    }

    postWithBody(req, res) {
        const { a, b } = req.body;

        const rm = {
            data: { body: { a, b } },
        };

        if (a === undefined || b === undefined) {
            rm.result = { code: -1, msg: '파라미터 부족' };
        } else {
            rm.result = { code: 1 };
        }

        res.send(rm);
    }

    postWithFormData(req, res) {
        const form = formidable({ multiples: true });

        form.parse(req, (err, fields, files) => {
            const { a, b } = fields;

            const rm = {
                data: { fd: { a, b } },
            };

            if (a === undefined || b === undefined) {
                rm.result = {
                    code: -1, msg: '파라미터 부족'
                };
            } else {
                rm.result = { code: 1 };
            }

            res.send(rm);
        });
    }
};