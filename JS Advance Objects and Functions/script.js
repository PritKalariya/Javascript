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