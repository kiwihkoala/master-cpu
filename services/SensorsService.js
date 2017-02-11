/**
 * Created by theonly on 10/02/2017.
 */
var debug = require('debug')('iot-master-cpu:server:services:sensors');
var FileReader = require('../services/FileReaderService');
var TemperatureSensor = require('../models/TemperatureSensor');
var FanSensor = require('../models/FanSensor');
var Files = require('../constants/Files');

function SensorsService() {
}

SensorsService.files = Files.ODROID.XU4;

SensorsService.fan = function (response) {
    if (!SensorsService.files.hasOwnProperty('FanSensor'))
        response({failed: true, message: '[FanSensor] SENSOR NOT AVAILABLE FOR THIS MODULE'});

    FileReader.read(SensorsService.files.FanSensor, response, FanSensor.parse);
};

SensorsService.temperature = function (response) {
    if (!SensorsService.files.hasOwnProperty('TemperatureSensor'))
        response({failed: true, message: '[TemperatureSensor] SENSOR NOT AVAILABLE FOR THIS MODULE'});

    FileReader.read(SensorsService.files.TemperatureSensor, response, TemperatureSensor.parse);
};

module.exports = SensorsService;