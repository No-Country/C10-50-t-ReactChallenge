const productsToBulk = require("./products");

const ticketsToBulk = [
  {
    clientName: "Michael",
    staff: "John",
    table: "02",
    totalPrice: 13.52,
    paymentMethod: "cash",
    order: ["Pizza", "Coca Cola"],
    status: "Delivered",
    date: "2022-04-30T18:01:22.785Z",
  },
  {
    clientName: "Robert",
    staff: "Emily",
    table: "05",
    totalPrice: 19.97,
    paymentMethod: "cash",
    order: ["Hamburger", "Beer", "Ice Cream"],
    status: "Delivered",
    date: "2023-03-30T18:01:22.785Z",
  },
  {
    clientName: "Clent",
    staff: "Emily",
    table: "08",
    totalPrice: 19.97,
    paymentMethod: "cash",
    order: ["Taco", "Beer"],
    status: "Delivered",
    date: "2023-03-30T18:01:22.785Z",
  },
  {
    clientName: "Maria",
    staff: "John",
    table: "01",
    totalPrice: 19.97,
    paymentMethod: "cash",
    order: ["Fish and Chips", "Beer"],
    status: "Delivered",
    date: "2023-03-30T18:01:22.785Z",
  },
];

module.exports = ticketsToBulk;
