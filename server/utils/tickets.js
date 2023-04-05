const productsToBulk = require("./products")

const ticketsToBulk = [

    {
       "clientName": "Michael",
       "staff": "John",
       "table": 2,
       "totalPrice": 13.52,
       "paymentMethod": "cash",
       "order": ["Pizza", "Coca-cola"],
       "status": "Delivered",
       "date": "2022-04-30T18:01:22.785Z",
    },
    {
       "clientName": "Robert",
       "staff": "Emily",
       "table": 5,
       "totalPrice": 19.97,
       "paymentMethod": "cash",
       "order": ["Hamburger", "Beer","Ice Cream"],
       "status": "Delivered",
       "date": "2023-03-30T18:01:22.785Z",
    },
    {
       "clientName": "Stefany",
       "staff": "John",
       "table": 1,
       "totalPrice": 3.97,
       "paymentMethod": "cash",
       "order": ["Ice Cream"],
       "status": "Delivered",
       "date": "2023-03-30T18:01:22.785Z",
    },
    {
       "clientName": "Sofia",
       "staff": "Emily",
       "table": 6,
       "totalPrice": 13.50,
       "paymentMethod": "cash",
       "order": ["Hamburger", "Coca-cola"],
       "status": "Delivered",
       "date": "2023-03-30T18:01:22.785Z",
    }
]
   
module.exports = ticketsToBulk
