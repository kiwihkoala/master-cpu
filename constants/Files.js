/**
 * Created by theonly on 11/02/2017.
 */
function Files() {
}

Files.ODROID = {
    XU4: {
        TemperatureSensor: '/sys/devices/10060000.tmu/temp',
        FanSensor: '/sys/devices/odroid_fan.14/pwm_duty'
    }
};

module.exports = Files;