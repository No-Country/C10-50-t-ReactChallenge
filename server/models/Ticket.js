const { Schema } = require("mongoose");

const ticketSchema = new Schema ({
    id: {
        type: UUID
    },
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
    }

})

module.exports = model("Product", ticketSchema)