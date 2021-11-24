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
`hello ${msg.chat.first_name},\n
selamat datang di index pasar saham indonesia \n
click /JII \n
click /LQ45`
    );
});

bot.onText(/\/JII/,(msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
click /ACES : ACE HARDWARE INDONESIA \n
click /ADRO : ADARO ENERGY \n
click /AKRA : AKR CORPORINDO \n
click /ANTM : ANEKA TAMBANG \n
click /ERAA : ERAJAYA SWASEMBADA \n
click /EXCL : XL AXIATA \n
click /ICBP : INDOFOOD CBP SUKSES MAKMUR
        `
    );
});

bot.onText(/\/LQ_45/, (msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
click /ACES : ACE HARDWARE INDONESIA \n
click /ADRO : ADARO ENERGY \n
click /AKRA : AKR CORPORINDO \n
click /ANTM : ANEKA TAMBANG \n
click /ASII : ASTRA INTERNATIONAL \n
click /EXCL : XL AXIATA \n
click /INDF : INDOFOOD SUKSES MAKMUR
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

bot.onText(/\/ACES/,(msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
summary    : https://finance.yahoo.com/quote/aces.jk/\n
chart      : https://finance.yahoo.com/quote/ADRO.JK/chart?p=ACES.JK/\n
statistic  : https://finance.yahoo.com/quote/ADRO.JK/key-statistics?p=ACES.JK/\n
Historical : https://finance.yahoo.com/quote/ADRO.JK/history?p=ACES.JK/
        `
    );
});

bot.onText(/\/ADRO/,(msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
summary    : https://finance.yahoo.com/quote/adro.jk/ \n
chart      : https://finance.yahoo.com/quote/ADRO.JK/chart?p=ADRO.JK/\n
statistic  : https://finance.yahoo.com/quote/ADRO.JK/key-statistics?p=ADRO.JK/\n
Historical : https://finance.yahoo.com/quote/ADRO.JK/history?p=ADRO.JK/
        `
    );
});

bot.onText(/\/AKRA/,(msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
summary    : https://finance.yahoo.com/quote/akra.jk/\n
chart      : https://finance.yahoo.com/quote/ADRO.JK/chart?p=AKRA.JK/\n
statistic  : https://finance.yahoo.com/quote/ADRO.JK/key-statistics?p=AKRA.JK/\n
Historical : https://finance.yahoo.com/quote/ADRO.JK/history?p=AKRA.JK/
        `
    );
});

bot.onText(/\/ANTM/,(msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
summary    : https://finance.yahoo.com/quote/antm.jk/\n
chart      : https://finance.yahoo.com/quote/ADRO.JK/chart?p=ANTM.JK/\n
statistic  : https://finance.yahoo.com/quote/ADRO.JK/key-statistics?p=ANTM.JK/\n
Historical : https://finance.yahoo.com/quote/ADRO.JK/history?p=ANTM.JK/
        `
    );
});

bot.onText(/\/EXCL/,(msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
summary    : https://finance.yahoo.com/quote/excl.jk/\n
chart      : https://finance.yahoo.com/quote/ADRO.JK/chart?p=EXCL.JK/\n
statistic  : https://finance.yahoo.com/quote/ADRO.JK/key-statistics?p=EXCL.JK/\n
Historical : https://finance.yahoo.com/quote/ADRO.JK/history?p=EXCL.JK/
        `
    );
});

bot.onText(/\/ERAA/,(msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
summary    : https://finance.yahoo.com/quote/eraa.jk/\n
chart      : https://finance.yahoo.com/quote/ADRO.JK/chart?p=ERAA.JK/\n
statistic  : https://finance.yahoo.com/quote/ADRO.JK/key-statistics?p=ERAA.JK/\n
Historical : https://finance.yahoo.com/quote/ADRO.JK/history?p=ERAA.JK/

        `
    );
});

bot.onText(/\/ICBP/,(msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
summary    : https://finance.yahoo.com/quote/icbp.jk/\n
chart      : https://finance.yahoo.com/quote/ADRO.JK/chart?p=ICBP.JK/\n
statistic  : https://finance.yahoo.com/quote/ADRO.JK/key-statistics?p=ICBP.JK/\n
Historical : https://finance.yahoo.com/quote/ADRO.JK/history?p=ICBP.JK/
        `
    );
});

bot.onText(/\/ASII/,(msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
summary    : https://finance.yahoo.com/quote/asii.jk/\n
chart      : https://finance.yahoo.com/quote/ADRO.JK/chart?p=ASII.JK/\n
statistic  : https://finance.yahoo.com/quote/ADRO.JK/key-statistics?p=ASII.JK/\n
Historical : https://finance.yahoo.com/quote/ADRO.JK/history?p=ASII.JK/
        `
    );
});

bot.onText(/\/INDF/,(msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
summary    : https://finance.yahoo.com/quote/indf.jk/\n
chart      : https://finance.yahoo.com/quote/ADRO.JK/chart?p=INDF.JK/\n
statistic  : https://finance.yahoo.com/quote/ADRO.JK/key-statistics?p=INDF.JK/\n
Historical : https://finance.yahoo.com/quote/ADRO.JK/history?p=INDF.JK/
        `
    );
});
module.exports = router;
