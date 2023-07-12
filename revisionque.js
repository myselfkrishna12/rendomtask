/////////////////////QUE1///////////////
// WAP to find the reverse string without using existing methods


// function reverse(str)
// {
//     let r="";
//     for(let i = str.length-1; i>=0; i--)
//     {
//         r += str[i]
//     }
//     return r;
// }

// console.log(reverse("BHOPAL"));


////////////////////////////QUE2//////////////
// WAP to find unique value from an array suppose , let arr =[1,2,4,5,1,5,4,1,1,2]


// let arr =[1,2,4,5,1,5,4,1,1,2]

// let arr1 = [];

// let count = 0;

// let start = false;

// for (let i = 0; i < arr.length; i++) {

//     for (let j = 0; j < arr1.length; j++)
//      {
//         if (arr[i] == arr1[j])
//         {
//             start = true;
//         }
       
//         }
//         count++;

//         if(count == 1 && start == false){
//              arr1.push (arr[i]);
// }

// // start = false

// count = 0;


// }
// console.log(arr1)





////////////////QUE3///////////

// WAP to sort a given array using loop.


// function sort(array){
//     var done = false;
//     while (!done) {
//         done =true;

//         for (var i=1; i< array.length; i+=1) {
//             if (array[i-1] > array[i]){
//                 done = false;
//                 var tmp = array[i-1];

//                 array [i-1] =array = array[i]
//                 array[i] =tmp;
//             }
//     }
// }

// return array
// }

// var arr = [25,24,5,2,40,2]
// sort(arr)
// console.log(arr)



// let arr = [25,24,5,2,40,2]

// function sorted (arr){


//     for (let i=0; i<arr.length-1; i++){
//         let start = false;
//         for (let j=0; j<arr.length-1; j++){
//             if (arr[j]> arr[j+1]){
//                 let temp = arr[j];

//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;

//                 start = true; 

//             }
//         }
//         if (!start)break;
//     }

// return arr;
// }
// console.log(sorted(arr))


  /////////////////QUE4///////////

///////WAP to find factorial.

// let n=7;
// function findFact(n)
// {
//     let result = 1;
//     if(n===0)

//     return 1;

//     for (let i=2; i<=n; i++)

//     result = result * i;
//     return result;

// }

// console.log(findFact(n))