// Unit 2 Assessment: arrow-fns.js

// Set the value of giveMeTwo to an arrow function that returns 2.
//
// Ex.:
//   giveMeTwo();
//   => 2
const giveMeTwo = () => {
    return 2;
};

// Set the value of addNums to an arrow function that takes in two numbers and
// returns their sum.
//
// Ex.:
//   addNums(1, 2);
//   => 3
const addNums = (num1,num2) => {
    return num1 + num2;
};

// Set the value of max to an arrow function that takes in two numbers and
// returns the largest one.
//
// Ex.:
//   max(1, 2);
//   => 2
const max = (a,b) => {
    if (a >= b) {
        return a
    } else {
        return b
    }
}
// Note: you can also do this on one line:
// const max = (a, b) => (a >= b ? a : b);

// Given an array of numbers, return a new array that only includes the even
// numbers. Do this using array iteration methods. Do NOT use a for loop.
//
// Ex.:
//   evens([1, 2, 3, 4, 5]);
//   => [2, 4]
function evens(nums) {
    const isEven = (number) => {
        if (number%2 === 0) {
            return true
        } else {
            return false
        }
    }

    return nums.filter(isEven)
}  

// Given an array of names, return a new array of greetings for each name. Do
// this using array iteration methods. Do NOT use a for loop.
//
// Ex.:
//   createGreetings(['Clive', 'Jill', 'Torgal']);
//   => ['Hello, Clive!', 'Hello, Jill!', 'Hello, Torgal!']
function createGreetings(names) {
    const greet = (name) => {
        return `Hello, ${name}!`
    }

    return names.map(greet)



}

// Given an array of words, return a new array where each word is uppercased
// and only includes words that are longer than 4 characters. Do this using
// array iteration methods (you may need more than one). Do NOT use a for loop.
//
// Ex.:
//   loudLongWords(['apple', 'pear', 'cake', 'pinata']);
//   => ['APPLE', 'PINATA']
function loudLongWords(words) {
    const isLarge = (word) => {
        console.log(word.length);
        if (word.length > 4){
            return true
        } else {
            return false
        }
    };

    const upper = (word) => {
        return word.toUpperCase()
    };

    let newArr = words.filter(isLarge);
    console.log(newArr)

    return newArr.map(upper);




}

export { addNums, createGreetings, evens, giveMeTwo, loudLongWords, max };
