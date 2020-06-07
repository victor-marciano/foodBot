const Food = require('../food.js');
const arrayFood = require('../food.json');

exports.newBrFoodList = () => {
    const foodData = arrayFood.food.map(food => formatFoodData(food));
    let food = new Food(foodData);
    return food;
};

function formatFoodData(food) {
    return { name: food.name.toUpperCase(),
        kcal: Math.round(food.kcal),
        carbs: Math.round(food.carbs),
        protein: Math.round(food.protein),
        fats: Math.round(food.fats)
    }
}
