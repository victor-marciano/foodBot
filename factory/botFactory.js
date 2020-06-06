const TelegramBot = require('node-telegram-bot-api');

exports.newTelegramBot = () => {
    let bot;
    bot = new TelegramBot(process.env.BOT_TOKEN);

    if (process.env.NODE_ENV === 'production') {
        bot.setWebHook(process.env.WEBHOOK_URL, bot.token);
    }

    return bot;
}