const BotFactory = require('./factory/botFactory.js');
const FoodFactory = require('./factory/foodFactory.js');

let bot = BotFactory.newTelegramBot();
let food = FoodFactory.newBrFoodList();

bot.onText(/\/food (.+)/, async (msg, match) => {    
    try {    
        const foodData = food.getByName(match[1]);
        const message = foodData.map(food => buildMessage(food)).join(" ");    
        await bot.sendMessage(msg.chat.id, message, { parse_mode: "HTML" });           
    } catch (error) {
        await bot.sendMessage(msg.chat.id, error.message);               
    }
});

function buildMessage (food) {
    let message = 
`<pre>Alimento: ${food.name}

Calorias: ${food.kcal}kcal
Carbohidrato: ${food.carbs}g
Proteína: ${food.protein}g
Gordura: ${food.fats}g
</pre>`;

    return message;
}

module.exports = bot;