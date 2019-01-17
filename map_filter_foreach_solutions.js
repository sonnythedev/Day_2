
/*

Problem 1:       For the given array return the 2 times the item.
[1,2,3,4,5,6] should return [2,4,6,8,10,12]

//hint: figure out which iteration method we will use for this


Problem 2:       For the given array append ‘I like’ at the beginning of the item

 For example, [‘apple’,’orange’,’banana’] should return [‘I like apple’,’I like orange’, ‘I like banana’]


Problem 3:       For the given array; make sure it doesn’t contain kiwi

For example, [‘apple’,’orange’,’kiwi’] should return [‘apple’,’orange’]

Problem 4:       For the given array; check if each item is odd

[1,3,5,7,9] should return true
[1,3,5,12,9,14] should return false
*/

//Problem 1 solution:

function doubleArr(arr){
    let retArr=arr.map(
        function(item,index){
            return item * 2;
        }
    );
    return retArr;
}

//Problem 2 solution:

function appendIlike(arr){
    let retArr=arr.map(
        function(item,index){
            return 'I like '+item;
        }
    );
    return retArr;
}

//Problem 3 solution:

function filterOutKiwi(arr){
    let retArr=arr.filter(
        function(item,index){
            return item!='kiwi';
        }
    );
    return retArr;
}

//Problem 4 solution:

function checkEveryItemOdd(arr){
    let retBool=arr.every(
        function(item,index){
            return item%2==1;
        }
    );
    return retBool;
}
