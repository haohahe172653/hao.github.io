// Object destructuring

const account = {
    "email": "thopn3@fe.edu.vn",
    "password": "123456",
    "role": 1
}

const {
    email, 
    role
} = account

console.log(email);
console.log(role);


// Array destructuring
const data = [
    {
        "students": [
            {"id":1, "name":"David", "age": 20},
            {"id":2, "name":"Mary", "age": 20},
            {"id":3, "name":"Tom", "age": 19}
        ]
    },
    {
        "classes": [
            {"id": 1, "name": "SE1739"},
            {"id": 2, "name": "SE1740"}
        ]
    },
    {
        "courses": [
            {"id": 1, "code": "FER201m", "credit": 3},
            {"id": 2, "code": "SDN301", "credit": 4}
        ]
    }
]

// Destructuring thành 3 object: students, classes, courses
// Log 3 đối tượng này
const [listStudent, listClass, listCourse] = data

console.log(listStudent); // object
console.log(listClass);
console.log(listCourse);

console.log("List of students:");
// Hoat dong phan ra doi tuong listStudent
const {students} = listStudent
for (const s of students) {
    console.log(`${s.id}, ${s.name}, ${s.age}`);
}
