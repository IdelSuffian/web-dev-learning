const person = {
  name: 'John',
  age: 15,
  printNameAndAge: () => console.log(person.name + ':' + person.age),
};

person.printNameAndAge();

/**
 * Class is a blueprint to create an object
 */
class Person {
  // Attributes
  myAge;
  myName;

  constructor(name, age) {
    this.myName = name;
    this.myAge = age;
  }

  printNameAndAge() {
    console.log(`${this.myName} is ${this.myAge} years old`);
  }
}

const john = new Person('John', 15);
const jane = new Person('Jane', 14);

john.printNameAndAge();
jane.printNameAndAge();

// printNameAndAge({ myName: 'Bob', myAge: 20 });
