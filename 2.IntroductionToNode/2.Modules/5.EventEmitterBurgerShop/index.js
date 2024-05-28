const PizzaShop = require("./5.1EventEmitterBurgerShop");


const pizzaShop = new PizzaShop();

pizzaShop.on("neworder", (orderNumber, size, topp) => {
    console.log("ORDER RECIECED", orderNumber, size, topp);


});

pizzaShop.order("Medium", 10);