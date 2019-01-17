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
 some()
 every()
 reduce()

 reverse()
 slice()
 splice()

 join()
 from()
 isArray()

keys()
values()

 map()
 forEach()
 filter()
 reduce()
 some()
 every()

 */

 let arr=['apple','banana','cherry','orange'];
 let arr2=arr.forEach(function(e,i,arr){ //callback function
          e=e+' pie';
          console.log('item:',e);
          console.log('index:',i);
          //console.log(arr);
        }
 );

 ////Lets explore map function on array.
 /// It uses a call back function and iterates through each item
 ///the callback function takes 3 params item, index, and arr

 let arr2=arr.map(
     function(item, index, arr2){
          //item=item+' Pie';
          console.log(index);
          console.log(arr2);
          return item;
     }
 );

 //arr2=arr.map((item,index,arr)=>item+' Pie');
console.log(arr2);


///Lets explore filter
///filter is applied on array 
///It might filter out some items based on boolean condition
///So it will either return same number as the original array or less


arr2=arr.filter(
   function(item,index, arr){
        //return (item!='spinach' && item!='cherry');
        return item.length<5;
   }
);

arr=['apple','bananaGood','cherry','spinach','orangeGood','kiwi'];
let retVal=arr.some(
    function(item,index,arr){
        return item.endsWith('asdfsf');
    }
);
console.log(arr);
console.log(retVal);

arr=['appleGood','bananaGood','cherry','spinach','orangeGood','kiwi'];

retVal=arr.every(
    function(item,index,arr2){
        return item.endsWith('Good');
        console.log(arr2);
        //item!=arr[5]
    }
);
//console.log(arr);
console.log(retVal);
























