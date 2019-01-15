/*** We will explore various data types in javascript 
 * 
 * string, number, boolean, array, object, undefined, null
*/


let str='';
console.log('type of str:',typeof str);
str='Hi there am I a string?';
console.log('type of str:',typeof str);
str='123456';
console.log('type of str:',typeof str);

let num='100.50';
console.log('type of num:',num,typeof num);
num=100;
console.log('type of num:',num,typeof num);

let bool='true';
console.log('type of bool:',typeof bool);

bool=true;
console.log('type of bool:',typeof bool);

/////typeof array is actually object
let arr=[1,2,3,4,5,6,7];
console.log('type of arr:',typeof arr);

let obj={name:'Sonny',profession:'developer'};
console.log('type of obj:',typeof obj);

let undef=undefined;
console.log('type of undef:',typeof undef);

let nullVal=null;
console.log('type of nullVal:',typeof nullVal);

console.log('null is equal undefined?:',null==undefined);

console.assert(2>1,'1 is not less than 2!','3rd param');

////At this point we will explore various number types
//We will also examine how javascript treats variable as number or strings sometimes

/*
integer,
float,
NaN
isNan() function
Javascript has a math object which has a lot of important math related functions.

Such as:

math.max(),math.min(), math.round(), math.ceil(), math.floor(),math.rand() and much more
*/

//Number(), parseInt(), parseFloat(), toFixed(), toPrecision()
//Number.MAX_VALUE, Number.MIN_VALUE, Infinity

///math.max(),math.min(), math.round(), math.ceil(), math.floor(),math.rand() and much more


let x="10";
let y="20";

console.log('x + y is:',x+y);

console.log('y -x is:',y-x);
console.log('x * y is:',x*y);

x=10;
y=20;

console.log('x + y is:',x+y);

x=100.23456;
y=parseInt(x);

console.log(x+'parseInt is:',y);
console.log(x+'parseFloat is:',parseFloat(x));
console.log(x+'Number() is:',Number(x));

console.log(x+'toFixed(2) is:',x.toFixed(2));

////Demo Number.MAX_VALUE, Number.MIN_VALUE, Infinity etc

console.log('Number.MAX_VALUE IS',Number.MAX_VALUE);
console.log('Number.MIN_VALUE IS',Number.MIN_VALUE);
console.log('Infinity is',typeof Infinity);

////Demo these 2: 
console.log(1+2+'3');
console.log('1'+2+3);
console.log(Number('1')+2+3);
//It's important to parse or covert the variable into number

/////Add more stuff to data types

















