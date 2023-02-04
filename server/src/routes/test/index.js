const router = require('express').Router();
const TestController = require('../../controllers/test_controller');

const testController = new TestController();

console.log({ TestController, testController });

router.get('/param', (req, res) => testController.getParam(req, res));

router.post('/send/data', (req, res) => testController.postWithBody(req, res));

router.post('/send/formdata', (req, res) => testController.postWithFormData(req, res));

module.exports = router;