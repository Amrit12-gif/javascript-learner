const name = "look at mee sir";
const rollno = 30;
const email = "Hacker@gmail";

// console.log(name + rollno + email);
console.log(`my name is ${name}, my rollno is ${rollno}, my email is ${email}`);

const mynames = new String("kaplana-ch")
// console.log(mynames[3])
// console.log(mynames.__proto__)
// console.log(mynames.length)
// console.log(mynames.toUpperCase())
// console.log(mynames.toLowerCase());

console.log(mynames.charAt(4))
console.log(mynames.indexOf('n'))


const newString = mynames.substring(0, 6)
console.log(newString)



// slice
const anotherString = mynames.slice(-1, 5)
console.log(anotherString)