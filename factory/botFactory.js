const TelegramBot = require('node-telegram-bot-api');

exports.newTelegramBot = () => {
    let bot;
    let polling = (process.env.NODE_ENV === 'production') ? false : true;
    bot = new TelegramBot(process.env.BOT_TOKEN, {polling: polling});

    if (process.env.NODE_ENV === 'production') {
        bot.setWebHook(process.env.WEBHOOK_URL, bot.token);
    } 

    return bot;
}