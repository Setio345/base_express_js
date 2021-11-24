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
        click /JII \n
        click /LQ_45`
    );
});

bot.onText(/\/JII/,(msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
            click /ACES : ACE HARDWARE INDONESIA \n
            ADRO : ADARO ENERGY \n
            AKRA : AKR CORPORINDO \n
            ANTM : ANEKA TAMBANG \n
            BRIS : BANK SYARIAH INDONESIA \n
            BRPT : BARITO PASIFIC \n
            CPIN : CHAROEN POKPHAND INDONESIA \n
            ERAA : ERAJAYA SWASEMBADA \n
            EXCL : XL AXIATA \n
            ICBP : INDOFOOD CBP SUKSES MAKMUR
        `
    );
});

bot.onText(/\/LQ_45/, (msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
            ACES : ACE HARDWARE INDONESIA \n
            ADRO : ADARO ENERGY \n
            AKRA : AKR CORPORINDO \n
            ANTM : ANEKA TAMBANG \n
            ASII : ASTRA INTERNATIONAL \n
            BBCA : BANK CENTRAL ASIA \n
            BBNI : BANK NEGARA INDONESIA \n
            BBRI : BANK NEGARA REPUBLIK INDONESIA \n
            BBTN : BANK TABUNGAN NEGARA \n
            EXCL : XL AXIATA \n
            INDF : INDOFOOD SUKSES MAKMUR
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

//https://www.adaro.com/
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
