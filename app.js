console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n=====================================\n");

class Person {
  constructor(
    name = "Stranger",
    pets = 0,
    residence = "Nowhere",
    hobbies = []
  ) {
    (this.name = name),
      (this.pets = pets),
      (this.residence = residence),
      (this.hobbies = hobbies);
  }

  greeting(name) {
    console.log("Hello fellow person!");
  }

  addHobby(newHobby) {
    this.hobbies.push(newHobby);
  }

  removeHobby(oldHobby) {
    function filterHobby(hobby) {
      if (hobby === oldHobby) {
        return false;
      } else {
        return true;
      }
    }
  }
  // removeHobby(oldHobby) {
  //   this.hobbies = this.hobbies.filter((hobby) => hobby != oldHobby);
  //   }
}

let jayden = new Person("Jayden", 0, "New York", [
  "Basketball",
  "Building Computers",
  "Running",
  "Video Games",
]);

jayden.addHobby("Driving");
jayden.removeHobby("Running");

console.log(jayden);

console.log("EXERCISE 2:\n=====================================\n");

class Coder extends Person {
  constructor(name, pets, residence, hobbies = []) {
    super(name, pets, residence, hobbies);

    this.occupation = "Full Stack Web Developer";
  }

  greeting(name) {
    console.log("Hello Class, my ${name} occupation is a ${this.occupation}");
  }
}

let sister = new Coder("Arianna", 0, "New York", [
  "Reading",
  "Traveling",
  "Watch TV",
]);

console.log(sister);

console.log("EXERCISE 3:\n=====================================\n");

// let jayden = new Person("Jayden", 0, "New York", [
//   "Basketball",
//   "Building Computers",
//   "Running",
//   "Video Games",
// ]);

// jayden.addHobby("Driving");
// jayden.removeHobby("Running");

// console.log(jayden);

//--------------------------------------------------------------------------------

// let sister = new Coder("Arianna", 0, "New York", [
//   "Reading",
//   "Traveling",
//   "Watch TV",
// ]);

// console.log(sister);

// console.log("EXERCISE 4:\n=====================================\n");
class Calculator {
  result = 0;

  add(a, b) {
    if (b === undefined) {
      this.result += a;
    } else {
      this.result = a + b;
    }
    return this.result;
  }

  subtract(a, b) {
    if (b === undefined) {
      this.result -= a;
    } else {
      this.result = a - b;
    }
    return this.result;
  }

  multiply(a, b) {
    if (b === undefined) {
      this.result *= a;
    } else {
      this.result = a * b;
    }
    return this.result;
  }

  divide(a, b) {
    if (b === undefined) {
      this.result /= a;
    } else {
      this.result = a / b;
    }
    return this.result;
  }

  displayResult() {
    console.log(this.result);
  }

  clear() {
    this.result = 0;
  }
}

let calculator = new Calculator();

calculator.add(7, 7); // 14
calculator.subtract(5); // 9

calculator.result;

console.log(calculator);
