/***
 * Various Array related excercises
 * 
 * We will explore the following array functions
 * 
 * We will explore various array functions available in Javascript

The following functions are very common and useful:

Array methods to be covered:

 length
 indexOf
 findIndex
 find
 lastIndexOf
 includes
 concat

 pop()
 push()
 shift()
 unshift()

 map()
 forEach()
 filter()
 reduce()
 some()
 every()

 reverse()
 slice()
 splice()

 join()
 from()
 isArray()

keys()
values()


 */

let arr1=['apple','banana','cherry','grape','kiwi','mango','orange'];


console.log('arr1 map:');
///////map doesnt mutate the original array
arr2=arr1.map(
    function(e,i,arr){
        console.log(e);
        console.log(i);
        //console.log(arr);
        e=e+' pie';
        return e;
    }
);

console.log('arr1 after map:',arr1);
console.log('arr2 :',arr2);


console.log('arr1 filter:');

//////Filter doesn't mutate/change original array
arr2=arr1.filter(
    function(e,i,arr){
        console.log(e);
        console.log(i);
        //console.log(arr);
        //e=e+' pie';
        //return e;
        return (e!='kiwi');
    }
);

console.log(arr2);

//Reduce returns a value type. It doesnt change the array obviously. It also takes a initial seed value.
arr1=[1,2,3,4,5,100];
console.log('arr1 reduce:');
let val=arr1.reduce(
    function(total,e,i,arr){
        return total+e;
    },
    0
);

console.log(val);

/////Demoing some and every

let boolVal=arr1.some(
    function(item){
        return item>100;
    }
);

console.log('some item is > 100:',boolVal);

boolVal=arr1.some(
    function(item){
        return item<5;
    }
);

console.log('some item is <5:',boolVal);

boolVal=arr1.every(
    function(item){
        return item<5;
    }
);

console.log('every item is <5:',boolVal);

boolVal=arr1.every(
    function(item){
        return item<101;
    }
);

console.log('every item is <101:',boolVal);

///Reverse demo
//reverse does mutate the array
console.log('after reverse:',arr1.reverse());
console.log(arr1.reverse());

////Demoing slice and splice
//slice returns an array it removes items from start to end index
//arr1.slice(4,5);
arr2=arr1.slice(0,5);
console.log('items returned from slice:',arr2);
////Splice mutates/changes array. it takes 0 based index
console.log('arr1 before splice:',arr1);
arr1.splice(5,6);
console.log(arr1);


arr1=["Shania Twain","Celine Deone","Lionel Richie","Dianna Ross","Richard Marx"];

let strOutput=arr1.join('***');
console.log(strOutput);

arr2=strOutput.split('***');
console.log(arr2);









