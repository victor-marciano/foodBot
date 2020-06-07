class Food {    
    constructor (data) {
        this.data = data
    }

    getAll () {
        return this.data;
    }

    getByName (foodName) {   
        return this.data.filter(food => food.name.includes(foodName.toUpperCase()));
    }
    
}

module.exports = Food