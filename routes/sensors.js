var express = require('express');
var router = express.Router();
var SensorsService = require('../services/SensorsService');

var debug = require('debug')('iot-master-cpu:server:routes:sensors');
debug('STARTING ROUTE: /SENSORS');

router.get('/fan', function (req, res, next) {
    SensorsService.fan(function (response) {
        res.send(response)
    });
});

router.get('/temp', function (req, res, next) {
    SensorsService.temperature(function (response) {
        res.send(response)
    });
});

debug('DONE!');
module.exports = router;
