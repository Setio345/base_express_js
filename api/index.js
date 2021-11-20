var express = require('express');
var router = express.Router();


// Bot Setting
const TelegramBot = require('node-telegram-bot-api');
const token = '2138938798:AAFzkUPQBIeHUWeiUELph8J_ukBf5PJywVE';
const bot = new TelegramBot(token, {polling: true});


let global_msg_id;
// Main Menu Bot
bot.onText(/\/start/, (msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `hello ${msg.chat.first_name}, welcome...\n
        click /show_url`
    );
});

bot.onText(/\/show_url/, (msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
            //https://esp-telegrambot.herokuapp.com/api/sensor/165/12 \n
            //https://esp-telegrambot.herokuapp.com/api/test/cobacoba
        `
    );
});

bot.on('message', (msg) => {
  console.log(msg);
});


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json({
    "status": 202,
    "messgae": "Success"
  });
});

//https://esp-telegrambot.herokuapp.com/api/sensor/165/12
router.get('/sensor/:sensor1/:sensor2', (req, res, next) => {
  try {
      bot.sendMessage(
            global_msg_id, //msg.id
            `Pembacaan Sensor;; ${req.params.sensor1}, ${req.params.sensor2}`
     );
      res.json({
        "status": 202,
        "messgae": "Success",
        "data": {
          "sensor_1": req.params.sensor1,
          "sensor_2": req.params.sensor2       
        }
      });
  } catch (err) {
      next(err);
  }
});


//https://esp-telegrambot.herokuapp.com/api/test/cobacoba
router.get('/test/:key', function(req, res, next){
    bot.sendMessage(
            global_msg_id, //msg.id
            `${req.params.key}`
    );
    res.json(req.params.key);
});


module.exports = router;
