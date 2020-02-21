/* eslint-disable class-methods-use-this */

// Using 'Hard objects' or using the craziness below
// or experimental private fields and methods or TypeScript (better),
// you choose.
function createPerson(name, city) {
  // Private. Unaccessible outside Person once createPerson ends.
  let privateName = name;
  let privateCity = city;
  function setName(newName) {
    privateName = newName;
  }

  function setCity(newCity) {
    privateCity = newCity;
  }

  // Kind of a fake Person class just to use the get/set
  class Person {
    constructor(newName, newCity) {
      setName(newName);
      setCity(newCity);
    }

    get name() {
      return privateName;
    }

    get city() {
      return privateCity;
    }

    // If you don't do this, NodeJS(V8) will silently not assign the value
    set name(newName) {
      throw (new Error('Illegal statement. Trying to assign private field: "name".'));
    }

    set city(newCity) {
      throw (new Error('Illegal statement. Trying to assign private field: "city".'));
    }

    doSomething() {
      setCity('New York');
      setName('Tim');
    }
  }

  // return the new Person which references our private fields and functions.
  return new Person(name, city);
}

// Should work

const p1 = createPerson('Bob', 'Los Angeles');
console.log(p1.name, 'is in', p1.city);
p1.doSomething();
// Should NOT work.
try {
  p1.name = 'nope 1';
} catch (e) {
  console.log(e);
}

try {
  p1.setCity('nope 2');
} catch (e) {
  console.log(e);
}
console.log(p1.name, 'is in', p1.city);
