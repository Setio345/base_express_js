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
        https://finance.yahoo.com/quote/aces.jk/
        `
    );
});

bot.onText(/\/ADRO/,(msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
        https://finance.yahoo.com/quote/adro.jk/
        `
    );
});

bot.onText(/\/AKRA/,(msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
        https://finance.yahoo.com/quote/akra.jk/
        `
    );
});

bot.onText(/\/ANTM/,(msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
        https://finance.yahoo.com/quote/antm.jk/
        `
    );
});

bot.onText(/\/EXCL/,(msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
        https://finance.yahoo.com/quote/excl.jk/
        `
    );
});

bot.onText(/\/ERAA/,(msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
        https://finance.yahoo.com/quote/eraa.jk/
        `
    );
});

bot.onText(/\/ICBP/,(msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
        https://finance.yahoo.com/quote/icbp.jk/
        `
    );
});

bot.onText(/\/ASII/,(msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
        https://finance.yahoo.com/quote/asii.jk/
        `
    );
});

bot.onText(/\/INDF/,(msg) => {
    global_msg_id = msg.chat.id;
    bot.sendMessage(
        global_msg_id,
        `
        https://finance.yahoo.com/quote/indf.jk/
        `
    );
});
module.exports = router;
