function demoFunction(a, b, ...ls){
    console.log(a);
    console.log(b);
    console.log(ls);
}

demoFunction(10,20,"hello", true, 3.5, 8)

// Ex: 
function sumNumbers(...numbers){
    let total = 0;
    for (const item of numbers) {
        if(typeof item === "number")
            total += item
    }
    console.log("Output: " + total);
}

sumNumbers(5, "Hello", 5, 3.5, true) // Output: 13.5
