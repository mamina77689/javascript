// _#_
// #_#
// _#_
// 0 1 2
// 1 2 3
// 2 3 4
// const num = 15;
// const str = "haii";
// const boolea = true;
// console.log(`${num}type`, typeof num);
// console.log(`${str}type`, typeof str);
// console.log();

// const tal1 = window.prompt("1deh taliin urt"); // 12
// const tal2 =window.prompt("2deh taliin urt"); // 15
// const tal3 =window.prompt("3deh taliin urt"); // 13
// const num = Number(tal1) + Number(tal2) + Number(tal3)
// console.log(num)

//let cel = prompt('Celsuis')
//console.log(cel*1.8+32)
//alert(cel*1.8+32)

//let cm = prompt('cm')
//alert(cm*0.393700787401575)

// const name= prompt("hello i am ");
// const age = prompt("i am ");
// console.log(`Hello i am  ${name}, I am ${age} years old`)
// alert('Hello I am +"name".\n  I am + "age" years old.\n This is the new line with tab and some \ backslashes\.');

// let str1= prompt('string1')
// let str2 = prompt('string2')
// if (str1 >str2){
//     console.log('string1 iluu');
// }else{
//    console.log('string2 iluu');
// }

// console.log ('for loop')
// for(let i=1;i<=10;i++)
//     {
//       console.log(i);

//     }

// console.log ('for loop')
// for (let i=15;i>=3;i--)
// {
//     console.log(i);
// }

// let stringMoney= prompt('une?');
// let numberMoney = Number(stringMoney);
// if (5000 < numberMoney && numberMoney < 30000){
//     console.log(numberMoney / 100 * 115);
// }else{
//     console.log(numberMoney / 100 * 120);
// }

// const number= 5;
// let result ="";
// for (let i=0 ; i < number; i++) {
//     for (let j = 0 ; j < number; j++ ){
//         if ((i+j)%2===0){
//             result += "_"
//         }else{
//             result += "#"
//         }
//     }
//     result += "\n";
// }
// console.log (result)

//  let box =""
//  for (i=0 ; i<6; i++) {
//     box +="*"
//     console.log (box)
//  }

// let studentAges = [10,20,15,19,18,19,19];
// let i = 0;
// let sum =0;
// for (let i=0 ; i <studentAges.length;i++) {
//     sum += studentAges[i];
// }
// let avarage =sum /studentAges.length;
// console.log(avarage)

// let userBalance =[1000,2000,2500,4000000,13054,323425];
// for (let i=0;i<userBalance.length  ; i++) {
// userBalance[i]=userBalance[i]*1.15;
// }
// console.log(userBalance)

// const itCompanies =["facebook","google","microsoft","apple","ibm","oracle","amazon"];
// console.log(itCompanies);
// console.log(itCompanies.length)
// console.log(itCompanies[0])
// console.log(itCompanies[itCompanies.length -1])
// console.log(itCompanies[Math.ceil(itCompanies.length /2) -1])

//1
// function fullName(){
// console.log("bilgee hulan")
// }

// fullName();

//2
// function Fullname(name, lastname){
//     console.log (name+' '+lastname);
// }
// Fullname('hulan','bilgee');

//3
// function sum(a, b) {
//   sums = a + b;
//   return sums;
// }
// console.log(sum(2, 9));

// //4
// // function numm(num1, num2) {
// //   for (let i = num1; i <= num2; i++) {
// //     if (i % 2 === 0) {
// //       console.log(i);
// //     }
// //   }
// // }
// // numm(1, 7);

// //5
// // function numm(num1, num2) {
// //   for (let i = num1; i <= num2; i++) {
// //     if (i % 2 !== 0) {
// //       console.log(i);
// //     }
// //   }
// // }
// // numm(1, 7);

// let dataa = [1, 3, 5, 6, 13, 123, 59, 69, 169];
// function finder(a) {
//   console.log(data.indexOf(a));
// }
// finder(12);

// let data = [1, 3, 5, 6, 13, 123, 59];
// let sum = 0;
// function avr() {
//   for (let i = 0; i < data.length; i++) {
//     sum += data[i];
//   }
//   console.log(sum / (data.length + 1));
// }
// avr();

// let stri = "Sainuu";
// function bstr(a) {
//   console.log(a.toUpperCase());
// }
// bstr(stri);

// let string = "Sainuu";
// function bstr(a) {
//   console.log(a.toLowerCase());
// }
// bstr(stri);

// let arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20, 69, -30];

// function filt(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (arr[i] < arr[j]) {
//         x = arr[i];
//         arr[i] = arr[j];
//         arr[j] = x;
//       }
//     }
//   }
//   return arr;
// }
// console.log(filt(arr));

document.getElementsByTagName("h1")[0].innerHTML = "tagName";
document.getElementsByClassName("hai")[0].innerHTML = "class";
document.getElementById("hi")[1].innerHTML = "id";

document.getElementsByClassName("1")[0].innerHTML = "class";
document.getElementsByClassName("1")[1].innerHTML = "class";
document.getElementsByClassName("1")[2].innerHTML = "class";
document.getElementsByClassName("1")[3].innerHTML = "class";
