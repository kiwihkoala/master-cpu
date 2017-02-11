/**
 * Created by theonly on 10/02/2017.
 */
var express = require('express');
var router = express.Router();
var debug = require('debug')('iot-master-cpu:server:routes:telegram');
var SensorsService = require('../services/SensorsService');

debug('STARTING ROUTE: /TELEGRAM');

var TelegramBot = require('node-telegram-bot-api');
var token = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
var bot = new TelegramBot(token, {polling: true});

bot.onText(/\/(.+)/, function (message, match) {
    telegramRequest(
        match[0].split(' ')[0].substring(1),
        message,
        function (result) {
            bot.sendMessage(result.chatId, result.message)
        });
});

function telegramRequest(method, message, result) {
    debug('RECEIVED [' + method + '] COMMAND from [' + message.chat.id + ']');
    var chatId = message.chat.id;

    try {
        SensorsService[method](function (response) {
            result({chatId: chatId, message: JSON.stringify(response)});
        });
    } catch (e) {
        if (method !== 'start')
            result({chatId: chatId, message: '2 - NOT A VALID REQUEST'});

        result({chatId: chatId, message: 'Welcome to the IOT WORLD, please follow me! :D'});
    }
}

router.get('/status', function (req, res, next) {
    res.send('OK');
});

debug('DONE!');
module.exports = router;