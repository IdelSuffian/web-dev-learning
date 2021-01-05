const someNumbers = [2, 3, 6, 8, 9];

const print = (value) => console.log(value);

const printValueAndIndex = (value, index) => {
  print(`Value at index [${index}] is ${value}`);
};

const greaterThanFive = (value) => {
  if (value > 5) {
    print(value);
  }
};

const printOddNumber = (value) => {
  if (value % 2 > 0) {
    print(value);
  }
};

someNumbers.forEach(printOddNumber);
