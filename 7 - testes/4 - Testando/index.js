/*
// forEach

var myHTML = "<ul>";
var numbers = [1,2,3,4,5];

numbers.forEach(function(value, index, array){
    myHTML += `<li>${value}</li>`;
});

myHTML += "</ul>";

console.log(myHTML);
*/

/*

//Map
var usersList = [
    {name:"Matheus", credit:500},
    {name:"Felix", credit:800}
]

usersList.map(function(value, index, array){
    console.log(value.credit += 100);
    
})
*/


/*

// Filtter

var usersList = [
    {Name: "Matheus", Credit:300},
    {Name: "João", Credit: 400},
    {Name: "Felix", Credit: 650},
    {Name: "Junior", Credit: 800},
    {Name: "Fernando", Credit: 960}
]

var newUsersList = usersList.filter(function(value, index, array){
    // return value.Credit > 500;
    return value.Name.length > 5
})

console.log(newUsersList);
*/

/*
//find

var usersList = [
    {Name: "Matheus", Credit:300},
    {Name: "João", Credit: 400},
    {Name: "Felix", Credit: 650},
    {Name: "Junior", Credit: 800},
    {Name: "Fernando", Credit: 960}
]

var felix = usersList.find(function(value, index, array){
    return value.Name === "Felix"
})

console.log(felix);
*/

/*

//findIndex
var usersList = [
    {Name: "Matheus", Credit:300},
    {Name: "João", Credit: 400},
    {Name: "Felix", Credit: 650},
    {Name: "Junior", Credit: 800},
    {Name: "Fernando", Credit: 960}
]

var felix = usersList.findIndex(function(value, index, array){
    return value.Credit === 400;
})

console.log(felix);
*/

/*
//every

var userList = [
    {Name: "Matheus", Credit:300},
    {Name: "João", Credit: 400},
    {Name: "Felix", Credit: 650},
    {Name: "Junior", Credit: 800},
    {Name: "Fernando", Credit: 960}
]

var a = userList.every(function(value, index, array){
    return value.Credit > 100
})

console.log(a);
*/

var userList = [
    {Name: "Matheus", Credit:300},
    {Name: "João", Credit: 400},
    {Name: "Felix", Credit: 650},
    {Name: "Junior", Credit: 800},
    {Name: "Fernando", Credit: 960}
]

