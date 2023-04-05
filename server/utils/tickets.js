const productsToBulk = require("./products")

const ticketsToBulk = [
    {
       "clientName": "Michael",
       "staff": "John",
       "table": 2,
       "totalPrice": 13.52,
       "paymentMethod": "cash",
      // "order":
      //    ["Pizza", "Coca-cola"],
      "order":
         [
            // {"id": "642c98ea52eba474034d1c33"}
            "642c98ea52eba474034d1c33"
         ],
       "status": "Delivered",
       "date": "2022-04-30T18:01:22.785Z",
    },
    {
       "clientName": "Robert",
       "staff": "Emily",
       "table": 5,
       "totalPrice": 19.97,
       "paymentMethod": "cash",
      //  "order": ["642c8d5a9f7a7dc75a1c5385", "Beer","Ice Cream"],
       "status": "Delivered",
       "date": "2023-03-30T18:01:22.785Z",
    }
]
   
module.exports = ticketsToBulk