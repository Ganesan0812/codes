//! Named function

function display()
{
    console.log("i am  display function");
    
}

display()


//! function with paarameter


function msg(a)
{
    console.log(a);
    
}

msg(10)

//! function with return

function add(a,b,c)
{
  return a+b-c
}

let a1=add(20,50,40)
console.log(a1);


//! anonymous function
// function that does not have  any name.

// ? syntax : function(){

// ?                    }

// now we have to store this function in one variable

let add1=function(a,b){
    console.log("I am function with expression");
    console.log(a+b);
    
}

add1(10,50)

let ayya=function(a,b,c){
    console.log("hi am ayyapan function");
    return a+b-c
    
}

let gani=ayya(10,40,70)
console.log(gani);



// ! Arrow function 
let sub=(a,b)=>{
    console.log("i am arrow function");
    console.log(a-b);
    
    
}

sub(150,80)


let reverse=(a)=>{

   i=0
   j=a.length-1
   
   while(i<j)
    
    {
    if(a.charAt(i)!=a.charAt(j))
    {
        return false
    }

    i++
    j--

  }


  return true


}

let str='madam'

if(reverse(str)==true)
    {
    console.log("palindrome")
    }
else
   {
    console.log("not palindrome");
    
   }


// ! nested function

let outer=()=>{
    let a=10

    // console.log(b);
    

    let inner=()=>{
        let b=20
        console.log(a+b);
        
    }
    inner()

    
}

outer()


// ! lexical scopping

// when we are taking nested function, inner function can take the property of outer function but the outerr function can't take the property of inner function.it is called lexical scopping.



// ! higher order function and callback function

// any function that takes another function as paraameter, that is called higherorder function

// the function we are sending as parameter to the higherOrder function is called callback function.

let bye=()=>{

    console.log("byee....");
    

}

let hi=()=>{
    console.log(`hi......`);
    
}

let hii=(msg)=>{

    msg()

}

hii(bye)
hii(hi)



let play=()=>{
    console.log("likes to play cricket");
    
}

let hof=(myname,age,like)=>{

    console.log("hi i am higherr order");
    like()
    

}

hof(10,20,play);



//! IIFE-

// Immediate Invoke Function Expression

(function()
{
    console.log(" iam IIFE");
    
})();

(function(){
    console.log('i am gani ffunction');
    
})();

(function(){
    console.log('i am ayyapan function');
    
})()
