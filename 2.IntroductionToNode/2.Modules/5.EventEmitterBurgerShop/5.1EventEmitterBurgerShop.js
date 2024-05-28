
const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter{
    #orderNumber = 0;


    order(size, toppings){
        this.#orderNumber++;
        this.emit("neworder", this.#orderNumber, size, toppings);
    }

    displayOrder(){
        console.log("Order Number: ", this.#orderNumber);
    }
}

module.exports = PizzaShop;