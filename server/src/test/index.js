const router = require('express').Router();
const formidable = require('formidable');

router.get('/param', (req, res) => {
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
});

router.post('/send/data', (req, res) => {
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
});

router.post('/send/formdata', (req, res) => {
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
});

module.exports = router;