/**
 * Created by theonly on 10/02/2017.
 */
function FanSensor(speed) {
    this.speed = speed;
}

FanSensor.parse = function (data) {
    return new FanSensor(data.substring(0, data.length - 1));
};

module.exports = FanSensor;