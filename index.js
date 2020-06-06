const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyparser.json());

app.listen(8000, () => {
    console.info("Bot started");
})

