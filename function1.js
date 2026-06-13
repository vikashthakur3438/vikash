// function myfunction() {
//     console.log("hello ");
// }
//  for(let i=0;i<=9;setInterval(myfunction, 2000)){
//      console.log(myfunction());
// //  }
// // // setInterval(myfunction, 2000); // 2000 ms = 2 seconds

// function myfunction() {
//     console.log("hello");
// }

// for (let i = 0; i < 10; i++) {
//     setTimeout(myfunction, i * 2000);
// }

// function myfunction(msg){
//     console.log(msg);
// } 
// myfunction(prompt("enter your msg:"));

// //function sum fo 2
// function sum(x,y){
//     s=x+y;
//     console.log("before sum");
//     return s;
// }
// let val=sum(3,9);
// console.log(val);


//arrow function
// function sum(x,y){
//     s=x+y;
//     return s;
// }
// let val=sum(45,89);
// console.log(val)


// const arrowmulti=(a,b)=>{
//     return a/b;
// }

//partice
// let str = "vikash";

// for (let char of str) {
//     if ("aeiou".includes(char)) {
//         console.log(char, "is a vowel");
//     } else {
//         console.log(char, "is not a vowel");
//     }
// }
// function countvowel(msg){
//     let count=0;
//     for(const char of msg){
//       if(char=="aeiou"){
//         count++;
//       }
//     }
//     console.log(char);
// }    

// function countVowel(msg) {
//     let count = 0;

//     for (const char of msg) {
//         if ("aeiou".includes(char.toLowerCase())) {
//             count++;
//         }
//     }

//     console.log("Vowel count:", count);
// }

// // countVowel("vikash");
// const countVowel = (str) => {
//     let count = 0;

//     for (const char of str) {
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ) {
//             count++;
//         }
//     }

//     return count;
// };

// console.log("countVowel:", countVowel("vikash"));


//for each loop 
// let arr=[1,2,3,4,5,6,7];
// let arr=["vikash","apple","rohit","mango"];
// arr.forEach((val,indx,arr)=>{
//     console.log(val.toUpperCase(),indx,arr);
// });

// let arr=[12,34,56,788,90];
// let a=0;
// arr.forEach((val,indx,arr)=>{
//     a=val*2
//     console.log(a)
// })

// map
// let num = [12, 34, 56, 7, 88, 89, 9];

// let doubled = num.map((val) => {
//     return val * 2;
// });

// console.log(doubled);

///filter
// let arr=[12,3446,5687,87,980,634,534,8];

// let evenarr=arr.filter((val)=>{
//      return val>10;
// })
// console.log(evenarr);

// //reduce
// let a=[1,2,3,4];

// const output=a.reduce((res,val)=>{
//     return res+val;
// })
// console.log(output);

// let a=[12,3,56,-67,7];

// let old=a.reduce((res,val)=>{
//     return res > val ? res:val;
// });
// console.log(old);

//partice1
// let arr=[12,134,96,178,90,65];
// let newar=arr.filter((res)=>{
//     return res>=90
// }) 
// console.log(newar);

 let user=prompt("enter your number:");
 let arr=[];
 for(let i=1;i<=user;i++) {
     arr[i-1]=i;
 }
 console.log(arr);

let sum=arr.reduce((res,us)=>{
    return res*us;
})
console.log(sum);