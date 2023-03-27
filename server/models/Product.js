const { Schema } = require("mongoose");

const productSchema = new Schema ({
    name: {
        type: String
    },
    image:{
        type: Text
    },
    category: {
        type: String
    },
    price: {
        type: Number
    },
    time: {
        type: Number
    },
    description: {
        type: Text
    },
    available: {
        type: Boolean
    },
    creationDate: {
        type: Date,
        default: new Date,
    }

    

})

module.exports = model("Product", productSchema)