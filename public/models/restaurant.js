var mongoose = require('mongoose');
var restaurantSchema = mongoose.Schema({
    restaurant: {
        restaurantName : String,
        email: String,
        cuisine: String,
        address: String
    }
})

module.exports = mongoose.model('Restaurant', restaurantSchema);