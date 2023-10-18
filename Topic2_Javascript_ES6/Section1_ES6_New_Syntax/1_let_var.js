// #1: Phạm vi sử dụng biến khi dùng từ khóa: var và let

// for(var i = 0; i< 5; i++){
//     console.log("Element i: " + i);
// }
// console.log("Element outside loop: " + i);

// for(let j = 0; j< 5; j++){
//     console.log("Element j: " + j);
// }
// console.log("Element outside loop: " + j);

// Kết luận: Từ khóa let được sử dụng để khai báo biến với phạm vi trong khối (block scope)

// #2: Chuyển đổi 1 biến thành thuộc tính của đối tượng window
var counter = 10
console.log(window.counter)

let counter1 = 20
console.log(window.counter1)

// #3: Khởi tạo lại 1 biến khi nó đã tồn tại
var x = 15
var x = 20 // redeclare
console.log(x)

let y = 30
y = 40 // redeclare
console.log(y)