function listElements(...list){
    console.log(list);
}

listElements(1,2,4) // pack -> [1,2,4]

const list = [2, 4, true, 3.5, "hello"]
listElements(...list) // unapack list array: (2, 4, true, 3.5, "hello")

// Ex: 
const students_origin = [
    {"id":1, "name": "David", age: 20},
    {"id":2, "name": "John", age: 19},
    {"id":3, "name": "Mary", age: 21}
]

const students_current = [...students_origin, {"role": "admin", "state": "London"}]

console.log(students_current);

// Rải các phần từ của students_origin vào students_current và bổ bổ
// sung thêm 1 sinh viên mới. Và log ra dữ liệu của students_current
