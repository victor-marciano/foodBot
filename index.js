require('dotenv').config();
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const fs = require('fs');

const bot = require('./bot.js');

app.use(bodyparser.json());

app.post('/' + bot.token, (req, res) => {
    console.log(req.body);
    bot.processUpdate(req.body);
    res.sendStatus(200);
});

app.listen(8000, () => {
    console.info("Bot started");
})

