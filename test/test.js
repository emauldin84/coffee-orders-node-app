const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const Order = require('../models/orders');

// describe('Sanity check', function () {
//     it('should be 2', function() {
//         // assert.equal(2, 1 + 1);
//         expect(1 + 1).to.equal(2);
//     });
// });

describe('Order model', () => {
    it('should be able to grab an array of orders', async () => {
        const arrayOfOrders = await Order.getAll();
        expect(arrayOfOrders).to.be.instanceOf(Array);
    });

    it('should be able to grab a single order by id', async () => {
        const theOrder = await Order.getById(1);
        expect(theOrder).to.be.instanceOf(Order);
        console.log(theOrder)
    })
})