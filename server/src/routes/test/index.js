const router = require('express').Router();
const TestController = require('../../controllers/test_controller');

const testController = new TestController();

console.log({ TestController, testController });

router.get('/param', testController.getParam);

router.post('/send/data', testController.postWithBody);

router.post('/send/formdata', testController.postWithFormData);

module.exports = router;