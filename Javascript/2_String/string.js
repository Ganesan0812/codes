let snamae="gani"
let snamae2='GANI2'
let snamae3=`gani3`

console.log(typeof snamae2);

//! hoow to know the length of the string

console.log(snamae.length);

//! 1.touppercase()

/* it is used to convert any string into uppercase and it will return one new string*/

let oper=snamae.toUpperCase()
console.log(oper);//GANI

console.log(snamae);


//! 2.lowercase()

/* it is used to convert any string into lowercase and it will return one new string */


let gani=snamae2.toLowerCase()

console.log(gani);

console.log(snamae2);


//! 3.indexof()


//it is used to return the index of the specific character
//it will take the frist occurance of the character

console.log(snamae.indexOf('a'));

//! 4.charAt()

// it is used to know the character of the specific index.

console.log(snamae.charAt(3));


//! 5.includes

//it will retrun true if one string is present inside another string otherwise it will return false

console.log(snamae.includes('n'));

console.log(snamae.includes('z'));

console.log(snamae.includes('gani'));

//! 6.trim()

// it is used to remove the white space from both sides of the string

let str=`  honey  `

console.log(str.length);
console.log(str.trim().length);


//! 7.split

// it will convert the string  into array

let str1="hi how are you"

console.log(str1.split(""));

console.log(str1.split("h"));

//! 8.slice()

//it is used to extract the string from another string.
// here it will take two parameters (stratindex, endindex).
// it will not includes the endindrx value.
// whenever we are giving the index value from right to left(bignumber to small number) it will not print any  output. 

console.log(str1.slice(0,4)); //hi h

console.log(str1.slice(4));// ow are you

console.log(str1.slice(-1)); //u

console.log(str1.slice(-4,-1)); // yo


//! 9.substring()

//it is used to extract the string from another string.
// here it will take two parameters (stratindex, endindex).
// it will not includes the endindex value.
// here if we use negative index it will be converted into 0.


console.log(str1.substring(0,4));//hi h

console.log(str1.substring(4));// ow are you

console.log(str1.substring(4,1));//i h

console.log(str1.substring(3)); //how are you

console.log(str1.substring(-1));



//! 10.lastindexof()

// it will give the last occurances index of the specific character

let str3="kelivn for kemn"

console.log(str3.lastIndexOf("e"));


//! 11.concat()

// it is used to combine two or more than two strings


let cominedstr=str3.concat(" ",str3,"hoi")

console.log(cominedstr);




















