// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 2020,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job; 
}

Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 2020, 'teacher');
var jane = new Person('Jane', 1963, 'Designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/




// Obejct.create 
/*
var personProto = {
    calculateAge: function () {
        console.log(2020 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});
*/


/******************
 * Difference between function constructor & object.create

The difference between function constructor and object.create is that object.create builds an object that inherits directly from the one that we passed into the first argument. 

While, on the other hand the function constructor, the newly created object inherits from the constructor's prototype property.
*/



/************************
 * Primitive vs Objects
*/

// Primitives
var a = 23;
var b = a;

a = 46;

console.log(a);
console.log(b);


// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);


// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);


/*
Primitives: numbers,strings, booleans, undefined, and null
Everything else are objects.

So a big difference between primitives and objects is that variables containing primitives actually hold that data inside of the variable itself.

On objects it's very different.

Variables associated with objects do not actually contain the object, but instead they contain a reference to the place in memory where the object sits, i.e where the object is stored.

So a variable declared as an object does not have a real copy of the object it just points to that object.
*/