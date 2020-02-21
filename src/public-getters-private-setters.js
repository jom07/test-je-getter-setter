/* eslint-disable class-methods-use-this */
function createPerson(name, city) {
  // Private fields.
  let privateName = name;
  let privateCity = city;

  // Private methods.
  const setName = (newName) => {
    privateName = newName;
  };

  const setCity = (newCity) => {
    privateCity = newCity;
  };

  // Person class.
  class Person {
    get name() {
      return privateName;
    }

    get city() {
      return privateCity;
    }

    set name(newName) {
      throw (new Error('Illegal statement. Trying to assign private field: "name".'));
    }

    set city(newCity) {
      throw (new Error('Illegal statement. Trying to assign private field: "city".'));
    }

    doSomething() {
      setCity('New York');
      setName('King Moulla');
    }
  }

  // return the new Person.
  return new Person(name, city);
}

const p1 = createPerson('Bob', 'Ferell');
p1.name = 'nope';
console.dir(p1);
