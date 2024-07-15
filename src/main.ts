let username='shafay'
console.log(username);
let a:number=12
let b:string='6'
//console.log(a/b)
let Name:string;
let num:number;
let decision:boolean;
let date:any
let isActive:string|boolean
Name='shafayyyyyy'
num=48
decision=true;
date='15 july'
isActive=true

//method
let sum=(a:number,b:string)=>{
return a+b
}
console.log(sum(5,'hello'))

let fruits=['apple','mango']
let user=['shafay',5960]
let mixed=[45,'shafay',true]
user[0]=false//will work but tells you an error because ofcourse typescript
fruits.push(45)//will work but tells you an error because ofcourse typescript
fruits.unshift(true)//will work but tells you an error because ofcourse typescript
user=mixed//will work but tells you an error because ofcourse typescript
user.forEach(element => {
    console.log(element)
});
let test:string[]=[]
test.push('Dave')
test.push(26)
let mytuple:[string,number]=['David',69]
mytuple[2]=78
let myobj:object=[]
myobj=fruits
console.log(typeof myobj)
console.log(myobj)

//other way to define an object
const exampleObj= {
    name:'shafay',
    roll:'SE221098',
    age:19,
}
exampleObj.roll='se221098'
console.log(exampleObj.roll)

//defining structure for an object
type car={
    name:string,
    model:(string|number)[]
}
let newCar:car={
    name:'Aqua',
    model:['TYT2041',9878,'AquaEngine']
}
let goodCar={
    make:'honda',
    model:2010,
    variant:'VTI Prosmatec',
}

let carDeets=(theCar:car)=>{

    console.log(theCar)
}
carDeets(newCar)

//defining a parameter that accepts an object
let anotherCar=(newCar:{
    make:string,
    model:number,
    variant:string
})=>{
        console.log(`Hello ${newCar.variant}`)
    }
anotherCar(goodCar)

//interface instead of type
//the ? checks if there is value or not
interface food{
    name:string,
    origin?:string
}
let newfood:food={
    name:'biryani',
    origin:'pakistan'
}
const foodDeets=(foood:food)=>{
    return foood.origin?.toUpperCase()//because origin might be undefinedd!
}
console.log(foodDeets(newfood))

//Enums
enum grade{
    F,
    C,
    B,
    A,
}

//Type Aliases
//basically assigning self defined datatypes
type stringOrNum = string|number
type animal={
    name:string,
    id:stringOrNum
}

//literal type
let usern:'dave'|'samantha'
usern='samantha'

//function
let concat = (a:string,b:string):string => {
    return a+b
}
console.log(concat('Muhammad','Shafay'))

let subtract = function (a:number,b:number) {
    return a-b
}
console.log(subtract(10,5))

let addmore = (num1:number,num2:number,num3?:number)=>{
    if (typeof num3!='undefined') {
        return num1+num2+num3
    } else {
        return num1+num2
    }
}
console.log(addmore(6,6))

//default values
let summore = (num1:number=10,num2:number,num3:number)=>{
    return num1+num2+num3
}
console.log(summore(undefined,5,6))

//rest operator also the rest parameter should be at the end basically after all the necessary required parameters!
let abc= function (a:number,...numbers:number[]):number {
   return numbers.reduce((prev,curr)=>prev+curr)
}
console.log(abc(1,2,3))

//never return type
let loop= ()=>{
    let i:number=1
    while (true) {
        i++
        //if i uncomment the following code the return type will turn void!
        // if (i>=100) {
        //     break
        // }
    }
}
let showError = (errmsg:string)=>{
    throw new Error(errmsg)
}
//defining a type guard method
const isNumber= function (value:any):boolean {

    return typeof value ==="number" ? true :false
}
console.log(isNumber(8))

let numberOrString = (value:number|string):string=> {
    if (typeof value==="string") {
        return 'string'
    }
    if (isNumber(value)) {
        return 'number'
    }
    return showError('this cant happen!')
}
console.log(numberOrString(4))

//Type Assertions/typecasting

let addOrConcat=(num1:number,num2:number,method:'add'|'concat'):string|number=>{

    return method==='add'?num1+num2:''+num1+num2
}
//we're basically telling the ts that we know its gonna be a string
let myval:string = addOrConcat(5,4,'concat')as string
console.log(myval)
//be aware of your assertions you can make mistakes too just like the following code
let nextval:number= addOrConcat(5,4,'concat')as number
console.log(typeof nextval)

//unknown type
10 as string
(10 as unknown)as string

