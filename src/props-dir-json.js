// See: https://flaviocopes.com/how-to-list-object-methods-javascript/
const getMethods = (obj) => {
  const properties = new Set();
  let currentObj = obj;
  do {
    Object.getOwnPropertyNames(currentObj).map((item) => properties.add(item));
  // eslint-disable-next-line no-cond-assign
  } while ((currentObj = Object.getPrototypeOf(currentObj)));
  return [...properties.keys()].filter((item) => typeof obj[item] === 'function');
};

class SuperNumber extends Number {
  field = 0;

  constructor(num) {
    super(num);
    this.field = 'a field';
  }

  // eslint-disable-next-line class-methods-use-this
  sayHello() {
    console.log('Hello');
  }

  get field() {
    return this.field;
  }

  set field(newField) {
    this.field = newField;
  }
}

const num = new SuperNumber(1);
console.log(getMethods(num));
console.log(JSON.stringify(num));
console.dir(num);
