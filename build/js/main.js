"use strict";
let username = 'shafay';
console.log(username);
let a = 12;
let b = '6';
//console.log(a/b)
let Name;
let num;
let decision;
let date;
let isActive;
Name = 'shafayyyyyy';
num = 48;
decision = true;
date = '15 july';
isActive = true;
//method
let sum = (a, b) => {
    return a + b;
};
console.log(sum(5, 'hello'));
let fruits = ['apple', 'mango'];
let user = ['shafay', 5960];
let mixed = [45, 'shafay', true];
user[0] = false; //will work but tells you an error because ofcourse typescript
fruits.push(45); //will work but tells you an error because ofcourse typescript
fruits.unshift(true); //will work but tells you an error because ofcourse typescript
user = mixed; //will work but tells you an error because ofcourse typescript
user.forEach(element => {
    console.log(element);
});
let test = [];
test.push('Dave');
test.push(26);
let mytuple = ['David', 69];
mytuple[2] = 78;
let myobj = [];
myobj = fruits;
console.log(typeof myobj);
console.log(myobj);
//other way to define an object
const exampleObj = {
    name: 'shafay',
    roll: 'SE221098',
    age: 19,
};
exampleObj.roll = 'se221098';
console.log(exampleObj.roll);
let newCar = {
    name: 'Aqua',
    model: ['TYT2041', 9878, 'AquaEngine']
};
let goodCar = {
    make: 'honda',
    model: 2010,
    variant: 'VTI Prosmatec',
};
let carDeets = (theCar) => {
    console.log(theCar);
};
carDeets(newCar);
//defining a parameter that accepts an object
let anotherCar = (newCar) => {
    console.log(`Hello ${newCar.variant}`);
};
anotherCar(goodCar);
let newfood = {
    name: 'biryani',
    origin: 'pakistan'
};
const foodDeets = (foood) => {
    var _a;
    return (_a = foood.origin) === null || _a === void 0 ? void 0 : _a.toUpperCase(); //because origin might be undefinedd!
};
console.log(foodDeets(newfood));
//Enums
var grade;
(function (grade) {
    grade[grade["F"] = 0] = "F";
    grade[grade["C"] = 1] = "C";
    grade[grade["B"] = 2] = "B";
    grade[grade["A"] = 3] = "A";
})(grade || (grade = {}));
//literal type
let usern;
usern = 'samantha';
//function
let concat = (a, b) => {
    return a + b;
};
console.log(concat('Muhammad', 'Shafay'));
let subtract = function (a, b) {
    return a - b;
};
console.log(subtract(10, 5));
let addmore = (num1, num2, num3) => {
    if (typeof num3 != 'undefined') {
        return num1 + num2 + num3;
    }
    else {
        return num1 + num2;
    }
};
console.log(addmore(6, 6));
//default values
let summore = (num1 = 10, num2, num3) => {
    return num1 + num2 + num3;
};
console.log(summore(undefined, 5, 6));
//rest operator also the rest parameter should be at the end basically after all the necessary required parameters!
let abc = function (a, ...numbers) {
    return numbers.reduce((prev, curr) => prev + curr);
};
console.log(abc(1, 2, 3));
//never return type
let loop = () => {
    let i = 1;
    while (true) {
        i++;
        //if i uncomment the following code the return type will turn void!
        // if (i>=100) {
        //     break
        // }
    }
};
let showError = (errmsg) => {
    throw new Error(errmsg);
};
//defining a type guard method
const isNumber = function (value) {
    return typeof value === "number" ? true : false;
};
console.log(isNumber(8));
let numberOrString = (value) => {
    if (typeof value === "string") {
        return 'string';
    }
    if (isNumber(value)) {
        return 'number';
    }
    return showError('this cant happen!');
};
console.log(numberOrString(4));
