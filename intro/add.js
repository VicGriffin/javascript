let a = 3;
let b = 2;
const add = (a, b) =>{
    return a + b;
}
console.log(add(a, b));

const sayHello = function(Name){
    console.log(`Hello, ${Name} i would like you to do some work for me`)
}
sayHello("victor");

// arrow function
const sayGoodnight = (Name) => {
    console.log(`Goodnight, ${Name} have a good time sleeping`)
}
sayGoodnight("victor")

// if function
let age = 26;
if ( age >= 18) {
    console.log(`the person is an adult`)
}else {
    console.log(`the person is a minor so no alcohol`);
}
//if else
function grade1(es){
if (es >= 50){
    return (`A`);
}else if(es >= 40){
    return (`B`);
}else if (es >= 30){
    return (`C`);
}else if (es >= 20){
    return (`D`);
}else{
    return (`fail`);
}
}
let english = 40;
let swahili = 49;
console.log(`English score is ${english}`)
console.log(`your english grade is ${grade1(english)}`)
console.log(`swajili score is ${swahili}`)
console.log(`your swahili grade is ${grade1(swahili)}`)


function grade(m){
if (m >= 90){
    return (`A`);
}else if(m >= 80){
    return (`B`);
}else if (m >= 70){
    return (`C`);
}else if (es >= 60){
    return (`D`);
}else{
    return (`fail`);
}
}
let maths = 80;

console.log(`you math score is maths:${maths}`)
console.log(`your math grade is ${grade(maths)}`);


