let studentAges = [10,20,15,19,18,19,19];
let i = 0;
let sum =0;
for (let i=0 ; i <studentAges.length;i++) {
    sum += studentAges[i];
}
let avarage =sum /studentAges.length;
console.log(avarage)