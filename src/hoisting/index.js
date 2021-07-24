a = 2;
var a;
console.log(a); //aplica hoisting

console.log(a); 
var a = 2; //no aplica hoisting

nameOfDog("Ozai");

function nameOfDog(name) {
    console.log(name);
}; //aplica hoisting con funciones


