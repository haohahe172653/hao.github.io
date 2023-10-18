/* const là 1 keyword cho phép định nghĩa 1 hằng (constant) giống như biến với từ khóa let (block scope)
   Khi khai báo 1 const thì phải gán giá trị ban đầu trước khi sử dụng và không cho phép thay đổi giá trị
   Tính áp dụng: Có thể sử dụng để khai báo
   - Hằng 
   - Object
   - Array
   - List, Map, Set
*/

// #1: Sử dụng để khai báo hằng số 
const PI = 3.14
console.log(PI)

// #2: Sử dụng để khai báo 1 đối tượng
const student = {
    "id": 1,
    "name": "David",
    "age": 20
}

console.log(student)
console.log(`Id: ${student.id}, Name: ${student.name}, Age: ${student.age}`)
// Thay đổi giá trị của các thuộc tính trong đối tượng student
student.name = "David Beckham"
student.age = 21
console.log(`Id: ${student.id}, Name: ${student.name}, Age: ${student.age}`)

// Đóng băng: Không cho phép thay đổi giá trị các thuộc tính TRỰC TIẾP của đối tượng
const user = Object.freeze({
    "email": "david@gmail.com",
    "password": "123456",
    "address": {
        "street": "190 Nguyen Tuan",
        "state": "Thanh Xuan"
    }
})

user.email = "beckham@gmail.com"
user.password = "123"
user.address.street = "210 Nguyen Trai"
console.log(`Email: ${user.email}, Password: ${user.password}, Street: ${user.address.street}`);

// #3: Const với Array
const listUser = [
    {"id": 1, "name": "John", "age": 19},
    {"id": 2, "name": "Mary", "age": 21},
    {"id": 3, "name": "Tom", "age": 20}
]

// for (let index = 0; index < listUser.length; index++) {
//     const element = listUser[index];
//     console.log(element);
// }

for (const u of listUser) {
    console.log(`${u.id}, ${u.name}, ${u.age}`);
}

