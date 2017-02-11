/**
 * Created by theonly on 10/02/2017.
 */
var fs = require('fs');
var debug = require('debug')('iot-master-cpu:server:services:filereader');

function FileReaderService() {
}

FileReaderService.read = function (FILE, response, parser) {
    debug('READING AT: ' + FILE);
    fs.readFile(FILE, {encoding: 'utf-8'}, function (err, data) {
        if (!err)
            return response(parser(data));

        debug("ERROR: " + err);
        return response({failed: true});
    });
};

module.exports = FileReaderService;