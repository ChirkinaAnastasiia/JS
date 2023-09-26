'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  set setDiscount(promo) {
    if (promo === 'METHED') {
      this.discount = 15;
    }
    if (promo === 'NEWYEAR') {
      this.discount = 21;
    }
  },
  add(itemName, itemPrice, itemCount = 1) {
    this.items.push(
        {
          itemName,
          itemPrice,
          itemCount,
        },
    );
    this.increaseCount(itemCount);
  },
  increaseCount(num) {
    return this.count + num;
  },
  calculateItemPrice() {
    const realPrice = this.items.reduce((acc, item) =>
      acc + item.itemPrice * item.itemCount, 0);
    return realPrice - (realPrice * this.discount / 100);
  },
  clear() {
    this.items = [];
    this.count = 0;
  },
  print() {
    // console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },
};

cart.add('кекс', 80);
cart.add('пончик', 70, 7);
cart.add('эклер', 110, 2);
cart.add('вафли', 90, 5);

cart.print();
cart.setDiscount = 'METHED';
cart.print();
cart.setDiscount = 'NEWYEAR';
cart.print();

// cart.clear();
// console.log(cart.items, cart.totalPrice, cart.count);

