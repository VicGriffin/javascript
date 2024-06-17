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

