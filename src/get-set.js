
// See: https://javascript.info/private-protected-properties-methods
class CoffeeMachine {
  waterAmount = 0;

  set waterAmount(waterAmount) {
    if (waterAmount < 0) throw new Error('Negative water');
    this.waterAmount = waterAmount;
  }

  get waterAmount() {
    return this.waterAmount;
  }

  constructor(power) {
    this.power = power;
  }
}

// create the coffee machine
const coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = -10; // Error: Negative water
