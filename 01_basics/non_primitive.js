


//  non primitive datatypes = Objects, Arrays, Operators, Comments

// Object
let person = {name: "Aman", age: 22, enail: "@gmail.com"};
console.log(person);
console.log( typeof person);


let details = {name: "sita", age: 34, rollno: 12, email: "top@gmail.com"};
console.log(details);
console.log(typeof details);


// Arrays = Ordered list
let students = ["hari", "Anjana", "Arati"];
console.log(students);
console.log(typeof students);


// function
function greet(name) {
    return `hello, ${name}`;
}
console.log(greet ("Amar"));


// function

function myFunction(detail) {
    // Create an object with the details
    const user = {
        name: "nabina",
        age: 22,
        password: 122122
    };

    // Return the object
    return user;
}

// Call the function and store the returned object
const detail = myFunction();

// Log the returned object
console.log(detail);


