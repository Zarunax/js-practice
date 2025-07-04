// using functions that you don't write

function greet (name) {
    console.log('Hello, ' + name)
}

greet('Sam')

// What will the above code log?
// What happens if you change greet('Sam') to greet('Connor')

function double (number) {
    return number * 2
}

const result = double(5)
console.log(result)

// What will be logged in the console?
// Try changing the argument to 10. What do you get? 

function isEven (num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    } 
}

console.log(isEven(4))

// What will this return if you pass 5 instead of 4?
// What do you think function is doing? 
//
// % means 'modulo' - we're asking if num divides evenly into 2 with no remainders
// 10 % 5 = 0  
// 10 % 6 = 4 (6 goes in once, but another 6 does not go cleanly into 10. so we have 4 remianing)

