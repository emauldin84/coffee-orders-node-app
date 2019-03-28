const db = require('./conn');

//declare the class
class Order {
    constructor(id, first_name, last_name, drink, size, notes) {
        this.id = id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.drink = drink;
        this.size = size;
        this.notes = notes
    }

    static getAll() {
        return db.any(`select * from orders`);
    }

    static getById(id) {
       return db.one(`select * from orders where id=${id}`)
        .then((orderData) => {
            const orderInstance = new Order(orderData.id, orderData.first_name, orderData.last_name, orderData.drink, orderData.size, orderData.notes);
            return orderInstance;
        })
        .catch(() => {
            return null;
        })
        
    }

}

module.exports = Order;