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
console.log(sum(5, 'coder'));
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
    console.log(`coder ${newCar.variant}`);
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
//Type Assertions/typecasting
let addOrConcat = (num1, num2, method) => {
    return method === 'add' ? num1 + num2 : '' + num1 + num2;
};
//we're basically telling the ts that we know its gonna be a string
let myval = addOrConcat(5, 4, 'concat');
console.log(myval);
//be aware of your assertions you can make mistakes too just like the following code
let nextval = addOrConcat(5, 4, 'concat');
console.log(typeof nextval);
//unknown type
10;
10;
class person {
    //you dont have to declare the variables in the class first like you used to do in java
    //you can just directly initialize them in the constructor by using access modifiers
    constructor(name, age, isVirgin = true) {
        this.name = name;
        this.age = age;
        this.isVirgin = isVirgin;
        this.name = name;
        this.age = age;
        this.isVirgin = isVirgin;
    }
    getage() {
        return this.age;
    }
}
let shafayy = new person('shafay', '19');
console.log(shafayy.getage());
console.log(shafayy.age);
console.log(shafayy.isVirgin);
class coder extends person {
    constructor(role, company, pay, name, age, devgit) {
        super(name, age);
        this.role = role;
        this.company = company;
        this.pay = pay;
        this.role = role;
        this.company = company;
        this.pay = pay;
        this.devgit = devgit;
    }
    code(lang) {
        return `hi i'm coding in ${lang} these days!`;
    }
    test(status) {
        return `hi i tested my code and it seems ${status}`;
    }
    getVirginity() {
        return this.isVirgin;
    }
}
let shafayCoder = new coder('lead', '10Pearls', '150K', 'Shafay', 19, 'https://github.com/SHAFAY04');
console.log(`Hi its ${shafayCoder.getVirginity()}`);
console.log(`Hi i'm ${shafayCoder.getage()}`);
console.log(shafayCoder.age);
console.log(shafayCoder.isVirgin);
console.log(shafayCoder.code('typeScript'));
class employee {
    constructor(name) {
        this.name = name;
        this.id = ++employee.count;
    }
}
//a static variable belongs to the class rather than the instance of a class
//we use these to have better memory allocation
employee.count = 0;
let john = new employee('John');
let alyssa = new employee('Alyssa Baker');
console.log(john.id);
console.log(alyssa.id);
//get and set builtin functions and how they're different from normal functions
class park {
    constructor() {
        this.rides = [];
    }
    get getride() {
        return this.rides;
    }
    set setride(value) {
        if (Array.isArray(value) && value.every(elem => typeof elem === "string")) {
            this.rides = value;
            return;
        }
        else {
            throw new Error('Array of strings required!');
        }
    }
}
let askari = new park();
let stringarr = ['jumpy', 'idkweird', 'monkeyking'];
let wrongarr = ['jumpy', true, 154];
//note that you dont do askari.setride(stringarr)
askari.setride = stringarr;
//note that you dont do askari.getride()
console.log(askari.getride);
//spreading the array
askari.setride = [...stringarr, 'Bunjee Jumping'];
console.log(askari.getride);
let todaySales = {
    pizza: 15,
    roll: 23,
    salad: 5
};
//this function takes in an object
let todaysNet = (todayItems) => {
    let total = 0;
    for (const item in todayItems) {
        //if you had not declared the index signature there would be an error in the following line
        total = total + todayItems[item];
    }
    return total;
};
let property = 'pizza';
console.log(todaySales['pizza']);
//if you had not declared the index signature there would be an error in the following line
console.log(todaySales[property]);
console.log(todaysNet(todaySales));
//read only
todaySales.pizza = 40;
let ahmed = {
    name: 'ahmed',
    age: 19,
    subjects: ['physics', 'maths']
};
let prop = 'ahmed';
console.log(ahmed[prop]);
for (const key in ahmed) {
    //no key signature error will display here
    console.log(`${key}: ${ahmed[key]}`);
}
//now how to iterate through an object literal
//that does not have an index signature
for (const key in ahmed) {
    //we used assertion
    console.log(`${key}: ${ahmed[key]}`);
}
Object.keys(ahmed).map(key => {
    console.log(ahmed[key]);
});
let logStudentKeys = (ahmed, key) => {
    console.log(`Student ${key}:${ahmed[key]}`);
};
logStudentKeys(ahmed, 'name');
let lazyriver = {
    //anything is an unknown type
    anything: 15,
    height: 15,
    color: 'blue'
};
for (const key in lazyriver) {
    //you still need assertion to access keys
    console.log(`${key}: ${lazyriver[key]}`);
}
