/**
 * Created by theonly on 10/02/2017.
 */
var debug = require('debug')('iot-master-cpu:server:services:sensors');
var FileReader = require('../services/FileReaderService');
var TemperatureSensor = require('../models/TemperatureSensor');
var FanSensor = require('../models/FanSensor');

function SensorsService() {
}

SensorsService.fan = function (response) {
    // ODROID XU4 FAN SPEED FILE LOCATION
    FileReader.read('/sys/devices/odroid_fan.14/pwm_duty', response, FanSensor.parse);
};

SensorsService.temperature = function (response) {
    // ODROID XU4 FAN SPEED FILE LOCATION
    FileReader.read('/sys/devices/10060000.tmu/temp', response, TemperatureSensor.parse);
};

module.exports = SensorsService;