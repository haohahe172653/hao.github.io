function sum(a, b){
    console.log(a+b)
}

// call
sum("Hello",20)

// Arrow function (Hàm mũi tên)
const sumNumber = (a,b) => console.log(a+b)
// Call
sumNumber(20, 15)

// Ex:
const users = [
    {
        "id": 1, "email": "tom@gmail.com", "password": "$#123Anc"
    },
    {
        "id": 2, "email": "joe@gmail.com", "password": "$#1232345c"
    },
    {
        "id": 3, "email": "marry@gmail.com", "password": "$#123Anc"
    }
]

const printListUsers = (...data) => {
    data.forEach(({id, email}) => {
        console.log(`Id: ${id}, Email: ${email}`)
    })
}
// Call
printListUsers(...users)












