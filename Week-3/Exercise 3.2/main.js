// Bind exmaple -
// Bind method is used to create a new function which when invoked has it's this keyword set to the provided value.

const obj = {
  name: "Praduman",
  printName: function () {
    console.log(this.name);
  },
};

//The function is permanently bound here.If it is not binded it will refer to global context.
var fn = obj.printName.bind(obj);
fn();

// Call example - 
//The call method() calls a function with a given this value and other arguments provided individually.

function employee(name) {
  console.log(`${name}'s age is` + " " + this.age);
}

const obj2 = {
  age: 22,
};

employee.call(obj2, "Praduman");

// Apply example - 
//The apply method() calls a function with a given this value and arguments provided as an array.

function greet(arr) {
    console.log(this.greet + ` ${arr}`);
}

const obj3 = {
  greet: "Hi!",
};

greet.apply(obj3, ["Harry"]);
