import Pizza from './../src/business.js';

describe('Pizza', () => {
  
  test('should correctly create a pizza object with size small and cheese topping', () => {
    const pizza = new Pizza ("small", ["cheese"]);
    expect(pizza.size).toEqual("small");
    expect(pizza.topping).toEqual("cheese")
  });
});

// export default function Pizza(size, topping) {
//   this.size = size;
//   this.topping = topping;
// }

// Pizza.prototype.checkZa = function() {
//   if (this.size == 1) {
//     return "your " + this.topping + " 'za is a small!";
//   } else if (this.size == 2) {
//     return "your " + this.topping + " 'za is a medium!";
//   } else {
//     return "your " + this.topping + " 'za is a large!  Party time!";
//   }
// }