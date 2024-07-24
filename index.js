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


const number= 5;
let result ="";
for (let i=0 ; i < number;i++) {
    for (let j=0 ; j < number;j++){
        if ((i+j)%2===0){
            result += "_"
        }else{
            result += "#"
        }
    }
    result += "/n";
}
console.log (result)


//  let box =""  
//  for (i=0;i<6;i++){
//     box +="x"
//     console.log (box)
//  } 