//  Single string
console.log('single quoted')


// Double String
console.log("Double Quoted")

// backtickQuoted
console.log(`backtickquoted`)


//****  concatation */
const name = "man";
const age = 22;
const password = 12121;
console.log(name + age + password);
console.log(name + age + password, "i am a concat string");

// STRING DECLARE
const gameName = new String('Amrit-reule')
console.log(gameName[1]); 
console.log(gameName.__proto__);
console.log( typeof gameName.__proto__);



console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.toLocaleLowerCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('r'))


// substring
const myname = gameName.substring(0,7)
console.log(myname)


// slice
const anothername = gameName.slice(-9, 0)
console.log(anothername)

// trim() = used to space join
const newspace = "    Amrit    ";
console.log(newspace);
console.log(newspace.trim());

// replace
const tom = "reuleamrit34@.com";
console.log(tom.replace('reule', 'hari'))

// includes
console.log(tom.includes('reuleamrit'))
// console.log(tom.includes('mom'))

// split
let spt = ('name, top, room, llok')
console.log(spt.split("*"));


