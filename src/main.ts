let username = 'shafay'
console.log(username);
let a: number = 12
let b: string = '6'
//you cant multiply a string by a number
console.log(a*b)
let Name: string;
let num: number;
let decision: boolean;
let date: any
let isActive: string | boolean
Name = 'shafayyyyyy'
num = 48
//a boolean cant be a number
decision = 9;
date = '15 july'
isActive = true

//method
let sum = (a: number, b: string) => {
    return a + b
}
console.log(sum(5, 'coder'))

let fruits = ['apple', 'mango']
let user = ['shafay', 5960]
let mixed = [45, 'shafay', true]
//will work because javascript but ts tells you 
//that you cant assign a boolean to an index of
//an array of string and number
user[0] = false
//will work because javascript but ts tells you 
//that you cant push a number to an array of strings
fruits.push(45)
fruits.unshift(true)//will work but tells you an error because ofcourse typescript
user = mixed//will work but tells you an error because ofcourse typescript
user.forEach(element => {
    console.log(element)
});
let test: string[] = []
test.push('Dave')
//cant push number in an array of strings
test.push(26)
let mytuple: [string, number] = ['David', 69]
mytuple[2] = 78
let myobj: object = []
myobj = fruits
console.log(typeof myobj)
console.log(myobj)

//other way to define an object
const exampleObj = {
    name: 'shafay',
    roll: 'SE221098',
    age: 19,
}
exampleObj.roll = 'se221098'
console.log(exampleObj.roll)

//defining structure for an object
type car = {
    name: string,
    model: (string | number)[]
}
let newCar: car = {
    name: 'Aqua',
    model: ['TYT2041', 9878, 'AquaEngine']
}
let goodCar = {
    make: 'honda',
    model: 2010,
    variant: 'VTI Prosmatec',
}

let carDeets = (theCar: car) => {

    console.log(theCar)
}
carDeets(newCar)

//defining a parameter that accepts an object
let anotherCar = (newCar: {
    make: string,
    model: number,
    variant: string
}) => {
    console.log(`coder ${newCar.variant}`)
}
anotherCar(goodCar)

//interface instead of type
//the ? checks if there is value or not
//basically ? makes a property optional
interface food {
    name: string,
    origin?: string
}
let newfood: food = {
    name: 'biryani',
    origin: 'pakistan'
}
const foodDeets = (foood: food) => {
    return foood.origin?.toUpperCase()//because origin might be undefinedd!
}
console.log(foodDeets(newfood))

//Enums
enum grade {
    F,
    C,
    B,
    A,
}

//Type Aliases
//basically assigning self defined datatypes
type stringOrNum = string | number
type animal = {
    name: string,
    id: stringOrNum
}

//literal type
let usern: 'dave' | 'samantha'
usern = 'samantha'

//function
let concat = (a: string, b: string): string => {
    return a + b
}
console.log(concat('Muhammad', 'Shafay'))

let subtract = function (a: number, b: number) {
    return a - b
}
console.log(subtract(10, 5))

let addmore = (num1: number, num2: number, num3?: number) => {
    if (typeof num3 != 'undefined') {
        return num1 + num2 + num3
    } else {
        return num1 + num2
    }
}
console.log(addmore(6, 6))

//default values
let summore = (num1: number = 10, num2: number, num3: number) => {
    return num1 + num2 + num3
}
console.log(summore(undefined, 5, 6))

//rest operator also the rest parameter should be at the end basically after all the necessary required parameters!
let abc = function (a: number, ...numbers: number[]): number {
    return numbers.reduce((prev, curr) => prev + curr)
}
console.log(abc(1, 2, 3))

//never return type
//since the following loop is an endless loop
let loop = () => {
    let i: number = 1
    while (true) {
        i++
        //BUT
        //if i uncomment the following code the return type will turn void!
        // if (i>=100) {
        //     break
        // }
    }
}
let showError = (errmsg: string) => {
    throw new Error(errmsg)
}
//defining a type guard method
const isNumber = function (value: any): boolean {

    return typeof value === "number" ? true : false
}
console.log(isNumber(8))

let numberOrString = (value: number | string): string => {
    if (typeof value === "string") {
        return 'string'
    }
    if (isNumber(value)) {
        return 'number'
    }
    return showError('this cant happen!')
}
console.log(numberOrString(4))

//Type Assertions/typecasting

let addOrConcat = (num1: number, num2: number, method: 'add' | 'concat'): string | number => {

    return method === 'add' ? num1 + num2 : '' + num1 + num2
}
//here by using type assertions,
//we're basically telling the ts that we know its
//gonna be a string
let myval: string = addOrConcat(5, 4, 'concat') as string
console.log(myval)
//be aware of your assertions you can make mistakes too just like the following code
let nextval: number = addOrConcat(5, 4, 'concat') as number
//here even tho i told typescript its gonna be
//a number we get an string 
console.log(typeof nextval)

//MOST IMPORTANT POINT
//The ! operator is used to assert that the 
//result is not null, effectively telling TScript
// "I know this will not be null, trust me".
let coprightText= document.getElementById('copy')!

//unknown type
//used for illegal stuff like the following
10 as string
(10 as unknown) as string

//Classes and Interfaces
interface devWork {
    devgit: string,
    code(lang: string): string,
    test(status: string): string
}

class person {

    //you dont have to declare the variables in the class first like you used to do in java
    //you can just directly initialize them in the constructor by using access modifiers
    constructor(
        public name: string,
        private age: string | number,
        protected isVirgin: boolean = true
    ) {
        this.name = name
        this.age = age
        this.isVirgin = isVirgin
    }
    public getage() {
        return this.age
    }
}
let shafayy = new person('shafay', '19')
console.log(shafayy.getage())
console.log(shafayy.age)
console.log(shafayy.isVirgin)

class coder extends person implements devWork {

    devgit: string

    constructor(
        public role: string,
        public company: string,
        private pay: stringOrNum,
        name: string,
        age: stringOrNum,
        devgit: string

    ) {
        super(name, age)
        this.role = role
        this.company = company
        this.pay = pay
        this.devgit = devgit
    }
    code(lang: string): string {
        return `hi i'm coding in ${lang} these days!`
    }
    test(status: string): string {
        return `hi i tested my code and it seems ${status}`
    }

    public getVirginity() {
        return this.isVirgin
    }
}
let shafayCoder = new coder('lead', '10Pearls', '150K', 'Shafay', 19, 'https://github.com/SHAFAY04')
console.log(`Hi its ${shafayCoder.getVirginity()}`)
console.log(`Hi i'm ${shafayCoder.getage()}`)
console.log(shafayCoder.age)
console.log(shafayCoder.isVirgin)
console.log(shafayCoder.code('typeScript'))

class employee {
    name: string
    //a static variable belongs to the class rather than the instance of a class
    //we use these to have better memory allocation
    static count: number = 0
    id: number
    constructor(name: string) {
        this.name = name;
        this.id = ++employee.count
    }
}
let john = new employee('John')
let alyssa = new employee('Alyssa Baker')
console.log(john.id)
console.log(alyssa.id)

//get and set builtin functions and how they're different from normal functions
class park {

    private rides: string[]

    constructor() {
        this.rides = []
    }

    public get getride(): string[] {
        return this.rides
    }

    public set setride(value: string[]) {
        if (Array.isArray(value) && value.every(elem =>
            typeof elem === "string")) {
            this.rides = value
            return
        } else {
            throw new Error('Array of strings required!')
        }

    }
}

let askari = new park()
let stringarr = ['jumpy', 'idkweird', 'monkeyking']
let wrongarr = ['jumpy', true, 154]
//note that you dont do askari.setride(stringarr)
askari.setride = stringarr
//note that you dont do askari.getride()
console.log(askari.getride)
//spreading the array
askari.setride = [...stringarr, 'Bunjee Jumping']
console.log(askari.getride)

//Index Signatures
interface shopItems {
    //telling that the index can be a string not just a number
    readonly [index: string]: number
    //pizza cant be a string cuz of the index signature
    readonly pizza: number,
    roll: number,
    salad: number
}
let todaySales: shopItems = {
    pizza: 15,
    roll: 23,
    salad: 5
}
//this function takes in an object
let todaysNet = (todayItems: shopItems): number => {
    let total: number = 0
    for (const item in todayItems) {
        //if you had not declared the index signature there would be an error in the following line
        total = total + todayItems[item]
    }
    return total
}
let property: string = 'pizza'
console.log(todaySales['pizza'])
//if you had not declared the index signature there would be an error in the following line
console.log(todaySales[property])
console.log(todaysNet(todaySales))
//read only
todaySales.pizza = 40

interface student {
    // [index:string]:string|number|string[]|undefined
    name: string
    age: number
    subjects?: string[]
}
let ahmed: student = {
    name: 'ahmed',
    age: 19,
    subjects: ['physics', 'maths']
}
let prop = 'ahmed'
console.log(ahmed[prop])

for (const key in ahmed) {
    //no key signature error will display here
    console.log(`${key}: ${ahmed[key]}`)
}
//now how to iterate through an object literal
//that does not have an index signature
for (const key in ahmed) {
    //we used assertion
    console.log(`${key}: ${ahmed[key as keyof student]}`)
}
Object.keys(ahmed).map(key => {
    console.log(ahmed[key as keyof typeof ahmed])
})
let logStudentKeys = (ahmed: student, key: keyof student): void => {
    console.log(`Student ${key}:${ahmed[key]}`)
}
logStudentKeys(ahmed, 'name')

type poools = {
    //look we cant use a string literal directly!
    [index: 'height']: string
}
type Streams = 'height' | 'color' | 'deaths'

//RECORD TYPE HAS
//advantage as compared to the poools type
//we can use string types likes this
//drawback that we cant fix a type for a single 
//string type like we could in the poools type
//height can be just a number or a string
//so if we specify below thats gonna apply to all
type pools = Record<Streams, string | number>

let lazyriver: pools = {
    //anything is an unknown type to streams
    //doesnt include anything key
    anything: 15,
    height: 15,
    color: 'blue'
}
for (const key in lazyriver) {
    //you still need assertion to access keys
    console.log(`${key}: ${lazyriver[key]}`)
}

//Generics
//we use them when we are unsure about the type
let echo = <T>(arg: T): T => arg
let isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}
console.log(isObj(true))
console.log(isObj('helo'))
console.log(isObj([123, 455]))
console.log(isObj(lazyriver))

const isSomething = <T>(arg: T): { arg: T, is: boolean } => {
    //checking if its array
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    }
    //checking if its object
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is: false }
    }
    return { arg, is: !!arg }
}
let emptyobj = {}
console.log(isSomething(true))
console.log(isSomething('helo'))
console.log(isSomething([123, 455]))
console.log(isSomething([]))
console.log(isSomething(lazyriver))
console.log(isSomething(emptyobj))

//extend in generics
//makes sure there is a specific type passed ins
type hasId = {
    id: number
}
let processUser = <T extends hasId>(user: T): T => {
    return user
}
console.log(processUser({ id: 5, name: 'shafay' }))
//if you dont provide id it'll display an error
console.log(processUser({}))

//more advanced example of extends in generics
let getUser = <T extends hasId, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}
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
]
console.log(getUser(userArray, "id"))

class genericClass<T> {

    private data: T

    constructor(data: T) {
        this.data = data
    }
    public get getdata(): T {
        return this.data
    }
    public set setdata(value: T) {
        this.data = value
    }
}
let genObj = new genericClass('shafay')
console.log(genObj.getdata)
//look following error while using generics in a class
//when creating the object of the class you will
//have to specify the types that the object can be
//because when i first assigned 'shafay' which is
//a string the typescript assumed that there can
//only be strings passed in the class so you have
//to specify while creating objects as well
genObj.setdata = 46
//this time i will specify the types
let newGenObj = new genericClass<string | number | boolean>(45)
console.log(newGenObj.getdata)
//see we get no error this time
newGenObj.setdata = 'look a string'
console.log(newGenObj.getdata)

//UTILITY TYPES
console.log('//UTILITY TYPES')
interface assignment {
    studentName: string,
    title: string,
    grade: string,
    verified?: boolean
}
//this partial type allows us to pass in an object
//that just has one property
let updateAssignment = (assign: assignment, PropsToUpdate: Partial<assignment>): assignment => {
    return { ...assign, ...PropsToUpdate }
}
const assign1: assignment = {
    studentName: 'shafay',
    title: 'DSA',
    grade: 'A+'
}
console.log(updateAssignment(assign1, { grade: 'A' }))
console.log(assign1)

let gradedAssignment: assignment = updateAssignment(assign1, { grade: 'FULL' })
console.log(gradedAssignment)

//Required type
let requiredVerification: Required<assignment> = {

    //look the required type is asking for verified
    //key of the interface assignment to be included,
    //even tho verified is optional
    ...assign1
}
let providedVerification: Required<assignment> = {

    //so i here provide the required verification key

    ...assign1,
    verified: false
}

//Readonly type
let assignVerified: Readonly<assignment> = {

    ...gradedAssignment
}
assignVerified.grade = 'C'

//Record Type (MOST USED)
let color: Record<string, string> = {

    //look the blue key is string but its value
    //is a number which can't be a num as specified
    blue: 45,
}

type gradeKeys = 'A' | 'A+' | 'B' | 'C'
type students = 'sarah' | 'brandon' | 'dave' | 'samantha' | 'shafay' | 'paul'
let studentGrades: Record<students, gradeKeys> = {
    shafay: 'A+',
    sarah: 'A+',
    brandon: 'C',
    dave: 'B',
    paul: 'A',
    samantha: 'B'
}

interface grades {
    assignment1: number,
    assignment2: number
}
let gradeData: Record<students, grades> = {
    sarah: { assignment1: 9, assignment2: 4 },
    brandon: { assignment1: 2, assignment2: 3 },
    dave: { assignment1: 5, assignment2: 3 },
    samantha: { assignment1: 7, assignment2: 6 },
    shafay: { assignment1: 9, assignment2: 10 },
    paul: { assignment1: 10, assignment2: 7 }
}

//Pick type
//allows you to pick and use some properties from
//an object and converts them into a type
type assignResult = Pick<assignment, "studentName" | "grade">

let score: assignResult = {
    studentName: "goodie",
    grade: "A+"
}

//Omit Type
//allows you to omit a property from an object
type previewAssignmentNoGrade = Omit<assignment, "grade" | "verified">
let georgeAssignment: previewAssignmentNoGrade = {

    studentName: "George",
    title: 'Database Structure Diagrams'

}

//Extract type extracts some keys from an already
//existing type or object
type selectedStudents = Extract<students, "dave" | "paul">

//Exclude type excludes some keys from an already
//existing type or object
type excludedStudents = Exclude<students, "dave" | "paul">

type newtype = string | null | undefined
type notNull = NonNullable<newtype>
let nameString: { name: notNull } = {
    name: 43
}
let nameString2: notNull = 78

//Return Type
let addUtilityfunc = (lib: string, jar: string) => {
    return { lib, jar }
}
type newUtility = ReturnType<typeof addUtilityfunc>

const addUtility: newUtility = addUtilityfunc("Java.Sql", "JavaSqlConnector.jar")
console.log(addUtility)

//Parameters Type
type utilityParams = Parameters<typeof addUtilityfunc>
const utilityArgs: utilityParams = ["Java maths", "JavaMaths22.jar"]
const addUtility2: newUtility = addUtilityfunc(...utilityArgs)
console.log(addUtility2)

//Awaited
//helps us with return type of a promise

let getuserswithAwaited= async function( ){

    const data= await fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=>res.json())
     .catch((error)=>{
         if(error instanceof Error){
             console.log(error.message)
         }
     })
     return data
 }
 type getUsersReturnType= Awaited<ReturnType<typeof getusers>>
 getuserswithAwaited().then(users=>{
     console.log(users)
 })

//ARROW FUNCTIONS VS NORMAL FUNCTIONS

// arrow func does not have "this" context
let obj1 = {
    value: 45,
    arrfunc: () => {
        console.log(this.value)
    }
}
obj1.arrfunc()//you get undefined

//arrow functions doesn't have arguments object!
const arrfunc = () => {
    console.log(arguments)
}

//normal functions have "this" context
let obj2 = {
    value: 2004,
    normalFunc: function () {
        console.log(this.value)
    }
}
obj2.normalFunc()//we get our value

//normal functions have their arguments object!
const normalfunc = function () {
    console.log(arguments)
}
normalfunc(1, 3, 4)

//Destructuring objects
let todo = {
    id: 1,
    title: 'take out trash',
    user: {
        namee: 'shafay',
    },
}
//we destrutured props as well as renamed id!
let { id: todoid, title, user: { namee } } = todo
console.log(todoid, title, namee)


//Destructuring arrays
let arrayDestruc = [230, 2521, 325, 636]
const [first, second, ...rest] = arrayDestruc
console.log(first, rest)

//JSON
const post = {

    id: 1,
    title: 'blog post one',
    body: 'Post says nvidia rtx 4090 best'
}
interface posts {
    id: number,
    title: string,
    body: string
}
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
]
//this is what you'll be sending to the server
const str = JSON.stringify(posts)
console.log(str)

//parsing JSON
const parse = JSON.parse(str)
console.log(parse)

//Array.filter
let retailCompanies: object[] = []
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

retailCompanies = companies.filter(company => company.category === 'Retail')

console.log(retailCompanies)

//ASYNC JAVASCRIPT
//when you dont want your web to wait for a task
// to complete so that the other can begin
//for example while fetching data from the server
//it can take some seconds so you use
//async programming like callbacks(old),promises,
// and async await 
//we use async await nowadays which still deals
//with promises but in better way

let postsUL = (document.getElementById('posts')) as HTMLElement

let getposts = () => {
    postsUL.style.borderWidth = '5px';
    postsUL.style.borderStyle = 'solid';
    postsUL.style.borderColor = 'red';
    postsUL.style.backgroundColor = 'white'
    postsUL.style.padding='25px'

    setTimeout(() => {
        posts.forEach(post => {

            let postLI = document.createElement('li')
            postLI.innerText = `${post.title}`;
            postLI.style.color = 'BLACK'
            postsUL.appendChild(postLI)

        })
    }, 1000)
}
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

let createPost = (post: posts) => {
    setTimeout(() => {
        posts.push(post)
    }, 2000);
}
//   createPost({
//     id:3,
//     title:'post three',
//     body:'This seems interesting!'})

//so first we'll use callbacks to handle this
//we will leave the createPost function above
//as an example of the synchronous code which
//has our problem and we will create an async
//createPostsWithCallbacks method below  
let createPostsWithCallbacks = (post: posts, callback: () => void) => {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 2000);
}
//   createPostsWithCallbacks({
//     id:4,
//     title:'blog post four',
//     body:'we are using callbacks!'},getposts)

//now we're gonna use PROMISES
const createPostsWithPromises = (post: posts) => {

    return new Promise<void>((resolve,reject)=>{

        setTimeout(() => {
            posts.push(post)
    
            let error=false

            if(!error){
                resolve()
            }
            else{
                reject('Something went wrong!')
            }
        }, 2000)
    })
    
}

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

async function createPostsWithAsync(){
    
    await createPostsWithPromises({
        id: 5,
     title: 'blog post FIVE PROMISES',
       body: 'we are using promises!'
  })
  getposts()
}
createPostsWithAsync()
 
//async await with FETCH

let getusers= async function( ){

   const res= await fetch('https://jsonplaceholder.typicode.com/users')
    
   const data= await res.json()
   console.log(data)
}
getusers()

//to get values from forms input fields
//we use HTMLInputElement rather than
//HTMLElement since some HTMLElements
//like a div do not have a value
let addpostsform=document.getElementById('addposts')as HTMLElement
addpostsform.addEventListener('submit',onformsubmit)

function onformsubmit(e:Event){
    e.preventDefault()
    let title=(document.getElementById('title')as HTMLInputElement).value
    
}