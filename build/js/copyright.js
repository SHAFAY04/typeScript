"use strict";
//without assertions
// let year:HTMLElement|null= document.getElementById('#year')
// let thisYear:string= new Date().getDate().toString()
// if (year) {
//     year.setAttribute("datetime",thisYear)
// year.textContent=thisYear 
// }
//with assertions
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
