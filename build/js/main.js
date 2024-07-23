"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let username = 'shafay';
console.log(username);
let a = 12;
let b = '6';
//you cant multiply a string by a number
console.log(a * b);
let Name;
let num;
let decision;
let date;
let isActive;
Name = 'shafayyyyyy';
num = 48;
//a boolean cant be a number
decision = 9;
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
//will work because javascript but ts tells you 
//that you cant assign a boolean to an index of
//an array of string and number
user[0] = false;
//will work because javascript but ts tells you 
//that you cant push a number to an array of strings
fruits.push(45);
fruits.unshift(true); //will work but tells you an error because ofcourse typescript
user = mixed; //will work but tells you an error because ofcourse typescript
user.forEach(element => {
    console.log(element);
});
let test = [];
test.push('Dave');
//cant push number in an array of strings
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
//since the following loop is an endless loop
let loop = () => {
    let i = 1;
    while (true) {
        i++;
        //BUT
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
//here by using type assertions,
//we're basically telling the ts that we know its
//gonna be a string
let myval = addOrConcat(5, 4, 'concat');
console.log(myval);
//be aware of your assertions you can make mistakes too just like the following code
let nextval = addOrConcat(5, 4, 'concat');
//here even tho i told typescript its gonna be
//a number we get an string 
console.log(typeof nextval);
//unknown type
//used for illegal stuff like the following
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
    //anything is an unknown type to streams
    //doesnt include anything key
    anything: 15,
    height: 15,
    color: 'blue'
};
for (const key in lazyriver) {
    //you still need assertion to access keys
    console.log(`${key}: ${lazyriver[key]}`);
}
//Generics
//we use them when we are unsure about the type
let echo = (arg) => arg;
let isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj('helo'));
console.log(isObj([123, 455]));
console.log(isObj(lazyriver));
const isSomething = (arg) => {
    //checking if its array
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    //checking if its object
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
let emptyobj = {};
console.log(isSomething(true));
console.log(isSomething('helo'));
console.log(isSomething([123, 455]));
console.log(isSomething([]));
console.log(isSomething(lazyriver));
console.log(isSomething(emptyobj));
let processUser = (user) => {
    return user;
};
console.log(processUser({ id: 5, name: 'shafay' }));
//if you dont provide id it'll display an error
console.log(processUser({}));
//more advanced example of extends in generics
let getUser = (users, key) => {
    return users.map(user => user[key]);
};
let userArray = [
    {
        name: 'shafay',
        id: 221098,
        lang: 'ts'
    },
    {
        name: 'shaeel',
        id: 221083,
        lang: ':html',
        interest: 'cricket'
    }
];
console.log(getUser(userArray, "id"));
class genericClass {
    constructor(data) {
        this.data = data;
    }
    get getdata() {
        return this.data;
    }
    set setdata(value) {
        this.data = value;
    }
}
let genObj = new genericClass('shafay');
console.log(genObj.getdata);
//look following error while using generics in a class
//when creating the object of the class you will
//have to specify the types that the object can be
//because when i first assigned 'shafay' which is
//a string the typescript assumed that there can
//only be strings passed in the class so you have
//to specify while creating objects as well
genObj.setdata = 46;
//this time i will specify the types
let newGenObj = new genericClass(45);
console.log(newGenObj.getdata);
//see we get no error this time
newGenObj.setdata = 'look a string';
console.log(newGenObj.getdata);
//UTILITY TYPES
console.log('//UTILITY TYPES');
//this partial type allows us to pass in an object
//that just has one property
let updateAssignment = (assign, PropsToUpdate) => {
    return Object.assign(Object.assign({}, assign), PropsToUpdate);
};
const assign1 = {
    studentName: 'shafay',
    title: 'DSA',
    grade: 'A+'
};
console.log(updateAssignment(assign1, { grade: 'A' }));
console.log(assign1);
let gradedAssignment = updateAssignment(assign1, { grade: 'FULL' });
console.log(gradedAssignment);
//Required type
let requiredVerification = Object.assign({}, assign1);
let providedVerification = Object.assign(Object.assign({}, assign1), { verified: false });
//Readonly type
let assignVerified = Object.assign({}, gradedAssignment);
assignVerified.grade = 'C';
//Record Type (MOST USED)
let color = {
    //look the blue key is string but its value
    //is a number which can't be a num as specified
    blue: 45,
};
let studentGrades = {
    shafay: 'A+',
    sarah: 'A+',
    brandon: 'C',
    dave: 'B',
    paul: 'A',
    samantha: 'B'
};
let gradeData = {
    sarah: { assignment1: 9, assignment2: 4 },
    brandon: { assignment1: 2, assignment2: 3 },
    dave: { assignment1: 5, assignment2: 3 },
    samantha: { assignment1: 7, assignment2: 6 },
    shafay: { assignment1: 9, assignment2: 10 },
    paul: { assignment1: 10, assignment2: 7 }
};
let score = {
    studentName: "goodie",
    grade: "A+"
};
let georgeAssignment = {
    studentName: "George",
    title: 'Database Structure Diagrams'
};
let nameString = {
    name: 43
};
let nameString2 = 78;
//Return Type
let addUtilityfunc = (lib, jar) => {
    return { lib, jar };
};
const addUtility = addUtilityfunc("Java.Sql", "JavaSqlConnector.jar");
console.log(addUtility);
const utilityArgs = ["Java maths", "JavaMaths22.jar"];
const addUtility2 = addUtilityfunc(...utilityArgs);
console.log(addUtility2);
//Awaited
//helps us with return type of a promise
let getuserswithAwaited = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .catch((error) => {
            if (error instanceof Error) {
                console.log(error.message);
            }
        });
        return data;
    });
};
getuserswithAwaited().then(users => {
    console.log(users);
});
//ARROW FUNCTIONS VS NORMAL FUNCTIONS
// arrow func does not have "this" context
let obj1 = {
    value: 45,
    arrfunc: () => {
        console.log(this.value);
    }
};
obj1.arrfunc(); //you get undefined
//arrow functions doesn't have arguments object!
const arrfunc = () => {
    console.log(arguments);
};
//normal functions have "this" context
let obj2 = {
    value: 2004,
    normalFunc: function () {
        console.log(this.value);
    }
};
obj2.normalFunc(); //we get our value
//normal functions have their arguments object!
const normalfunc = function () {
    console.log(arguments);
};
normalfunc(1, 3, 4);
//Destructuring objects
let todo = {
    id: 1,
    title: 'take out trash',
    user: {
        namee: 'shafay',
    },
};
//we destrutured props as well as renamed id!
let { id: todoid, title, user: { namee } } = todo;
console.log(todoid, title, namee);
//Destructuring arrays
let arrayDestruc = [230, 2521, 325, 636];
const [first, second, ...rest] = arrayDestruc;
console.log(first, rest);
//JSON
const post = {
    id: 1,
    title: 'blog post one',
    body: 'Post says nvidia rtx 4090 best'
};
const posts = [
    {
        id: 1,
        title: 'blog post one',
        body: 'Post says nvidia rtx 4090 best'
    },
    {
        id: 2,
        title: 'blog post two',
        body: 'Post says Windows had blue screens today'
    }
];
//this is what you'll be sending to the server
const str = JSON.stringify(posts);
console.log(str);
//parsing JSON
const parse = JSON.parse(str);
console.log(parse);
//Array.filter
let retailCompanies = [];
const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];
retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);
//ASYNC JAVASCRIPT
//when you dont want your web to wait for a task
// to complete so that the other can begin
//for example while fetching data from the server
//it can take some seconds so you use
//async programming like callbacks(old),promises,
// and async await 
//we use async await nowadays which still deals
//with promises but in better way
let postsUL = (document.getElementById('posts'));
let getposts = () => {
    postsUL.style.borderWidth = '5px';
    postsUL.style.borderStyle = 'solid';
    postsUL.style.borderColor = 'red';
    postsUL.style.backgroundColor = 'white';
    postsUL.style.padding = '25px';
    setTimeout(() => {
        posts.forEach(post => {
            let postLI = document.createElement('li');
            postLI.innerText = `${post.title}`;
            postLI.style.color = 'BLACK';
            postsUL.appendChild(postLI);
        });
    }, 1000);
};
//creating a post that takes 2 seconds to create
//now note that getting posts takes 1 second
//and we dont get the third post in dom if we 
//call getposts() since it takes 2 seconds to
// create a post while
//getting the posts from the posts array takes
//only 1 second and the third post gets added
// 1 second after the pre existing posts are
//printed on dom as you can see below now this 
//is the problemwhere async programming comes in to help
let createPost = (post) => {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
};
//   createPost({
//     id:3,
//     title:'post three',
//     body:'This seems interesting!'})
//so first we'll use callbacks to handle this
//we will leave the createPost function above
//as an example of the synchronous code which
//has our problem and we will create an async
//createPostsWithCallbacks method below  
let createPostsWithCallbacks = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
};
//   createPostsWithCallbacks({
//     id:4,
//     title:'blog post four',
//     body:'we are using callbacks!'},getposts)
//now we're gonna use PROMISES
const createPostsWithPromises = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            let error = false;
            if (!error) {
                resolve();
            }
            else {
                reject('Something went wrong!');
            }
        }, 2000);
    });
};
// createPostsWithPromises({
//     id: 5,
//     title: 'blog post FIVE PROMISES',
//     body: 'we are using promises!'
// })
// .then(getposts)
// .catch(err=>console.log(err))
//ASYNC AND AWAIT
//Remember it works with promises so that you
//dont have to do stuff like .then
//it is more elegant way to handle promises
function createPostsWithAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        yield createPostsWithPromises({
            id: 5,
            title: 'blog post FIVE PROMISES',
            body: 'we are using promises!'
        });
        getposts();
    });
}
createPostsWithAsync();
//async await with FETCH
let getusers = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('https://jsonplaceholder.typicode.com/users');
        const data = yield res.json();
        console.log(data);
    });
};
getusers();
