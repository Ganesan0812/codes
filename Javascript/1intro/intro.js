// ! output methods


console.log("i am external javascript");

document.write(" hello ");

// alert("hii")


//  var,let,const


var a=10
console.log(a);

let b=20
console.log(b);

const c=10
console.log(c);

//? in var keyword re-declaration is possible

var a=100
console.log(a);

//? in let keyword re-declaration is not possible

// let b=20
// console.log(b)


// ! notes: for const we have to do the variable declaration and intialization in the same line
// const myname

// myname="rohit"
// console.log(myname);

// how many ways to write javascript?


//  ! data types

// ! primitive datatypes

// numbers, boolean, string, undefined, null, bigint


//! non primitive datatypes

//array,object,function



//! typeof operator is used to know the datatype

let num2=10

console.log( typeof num2);

//! boolean

let b1=true

console.log( typeof b1);

//! string

let str1='hello'
let str2="hii"
let str3=`heello`

console.log( typeof str1);
console.log( typeof str2);
console.log( typeof str3);


//! undefined

// when any variable is declared but not initialized is called undefined

let empname

console.log(empname);

//! null

let sal=null
console.log(sal)

console.log(typeof sal);


//! bigint

//any number which is subix with n then it is called abignit

let bigNumber =2n

console.log(bigNumber);

console.log(typeof bigNumber);

//! non-primative datatype

//! Array


//it is collection of hetrogenous or homogenous element


let arr=[10,"hello",true,null,undefined,[20,80]]


//! object

// in object we store the data in the form of key and value pairs,we can create a object inside the another object,it will return inside  curuly branches and we separate the data  by using comma.


let student={
    sname:"rahul",
    sid:100,
    is:false,
    skills:['java','html'],

    add :
    {
        city:"chenis",
        pin:294958588

    }
}

console.log(student);


//! functions

//block of instruction which is used to perform the specified task



function display(){
    console.log("hiuii mri");
    
}

display()







