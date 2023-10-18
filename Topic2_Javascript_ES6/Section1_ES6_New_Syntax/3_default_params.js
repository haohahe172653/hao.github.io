function sumNumbers(a, b){
    return a+b
}

console.log(sumNumbers(10, 20));

// Default parameters: Dinh nghia ham voi tham so dc gan gia tri mac dinh
function totalNumbers(a = 10, b = 5){
    return a + b
}

console.log(totalNumbers());
console.log(totalNumbers(undefined,undefined));
console.log(totalNumbers(25));
console.log(totalNumbers(undefined, 7));