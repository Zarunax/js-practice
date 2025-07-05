// modiify functions

// Edited Hi > Hello. Added "!". Added How are you?

function sayHello(name) {
  return "Hello, " + name + "! How are you?";
}

console.log(sayHello("Josh"));

// Edited sum function

function sum(a, b) {
  return a + b;
}

console.log(sum(10, 3243));

// New function to divide

function divide(a, b) {
  return a / b;
}

console.log(divide(25, 5));

// Using functions

// Code will log nothing, because strings are in '**' instead of "**"
// SHould be:

function greet(name) {
  console.log("Hello, " + name);
}

greet("Sam");

// In which case, changing greet('Sam') to greet('Connor') would do nothing. It would require greet("Sam") to greet("Connor") for the name to change, as below

function greet(name) {
  console.log("Hello, " + name);
}

greet("Connor");

// The code will log 10

// Changing the argument to 10 will log 20

function double(number) {
  return number * 2;
}

const result = double(10);
console.log(result);

// If you pass 5, it will return 'false', as it is not an even number.

// The function is checking if the given argument is an odd or even number.

// writing functions

function comment(food) {
  console.log("I love " + food + "!");
}

comment("sushi");

function visit(city) {
  console.log("I want to visit " + city + "!");
}

visit("Liverpool");

function greet(name) {
  return "Hi " + name + "!";
}

console.log(greet("Josh"));
