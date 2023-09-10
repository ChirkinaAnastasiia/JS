'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    this.calculateItemPrice();
    return this.totalPrice;
  },
  add(itemName, itemPrice, itemCount = 1) {
    this.items.push(
      {
        itemName,
        itemPrice,
        itemCount,
      }
    );
    this.increaseCount(itemCount);
  },
  increaseCount(num) {
    return this.count + num;
  },
  calculateItemPrice() {
    this.totalPrice = this.items.reduce((acc, item) => {
      return acc + item.itemPrice * item.itemCount;
    }, 0);
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.getTotalPrice());
  },
};

cart.add('кекс', 80);
cart.add('пончик', 70, 7);
cart.add('эклер', 110, 2);
cart.add('вафли', 90, 5);

cart.print();

cart.clear();
console.log(cart.items, cart.totalPrice, cart.count);


