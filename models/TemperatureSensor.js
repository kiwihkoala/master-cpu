/**
 * Created by theonly on 10/02/2017.
 */
function TemperatureSensor(sensor, temperature) {
    this.sensor = sensor;
    this.temperature = temperature;
}

TemperatureSensor.parse = function (data) {
    var filtered = data.split('sensor')
        .filter(function (value) {
            return value !== '';
        });

    var temps = [];
    filtered.forEach(function (each) {
        temps.push(new TemperatureSensor(
            each.substring(0, each.indexOf(":")).trim(),
            each.substring(each.indexOf(":") + 1).trim()
        ));
    });
    return temps;
};

module.exports = TemperatureSensor;