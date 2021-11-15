
let alexSiblings = {
    sister1: "Maria",
    sister2: "Martha",
    brother1: "Roger"
};

let student = {
    firstName : "Alex",
    lastName : "Miller",
    age : 25,
    siblings : alexSiblings,
    hobbies : [ 'Program', 'Dance', 'Read' ]
};

alexSiblings.bigBrother = student;

let animal = {
    name : "lion",
    age : 12,
    color : "yellow" 
};


console.log( student );
/*
console.log( student );
console.log( student.firstName, student['lastName'] );

let age = 'age';
console.log( "Age", student[age] );
console.log( "Animal age", animal[age] );
*/

/*
for( let key in student.siblings ){
    console.log( key, student.siblings[key] );
}

for ( let i = 0; i < student.hobbies.length; i ++ ){
    console.log( student.hobbies[i] );
}
*/

/*
let keys = Object.keys( animal );
let values = Object.values( animal );
console.log( keys );
console.log( values );
for( let i = 0; i < keys.length; i ++ ){
    console.log( animal[ keys[i] ] );
}

*/