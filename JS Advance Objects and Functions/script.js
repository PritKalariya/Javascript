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
/*
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
*/

/*
Primitives: numbers,strings, booleans, undefined, and null
Everything else are objects.

So a big difference between primitives and objects is that variables containing primitives actually hold that data inside of the variable itself.

On objects it's very different.

Variables associated with objects do not actually contain the object, but instead they contain a reference to the place in memory where the object sits, i.e where the object is stored.

So a variable declared as an object does not have a real copy of the object it just points to that object.
*/



/**********************************************
 * Passing Functions as arguments
*/
/*
var years = [1990, 1965, 1937, 2005, 1998];

// Generic function
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

// callback function 1
function calculateAge(el) {
    return 2016 - el;
}

// callback function 2
function isFullAge(el) {
    return el >= 18;
}

// callback function 3
function maxHeartRate(el) {
    if(el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
    
}

var ages = arrayCalc(years, calculateAge);

var fullAge = arrayCalc(ages, isFullAge);

var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAge);
console.log(rates);
*/



/******************************************
 * Functions returning functions
*/
/*
function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is ?');
        }
    } else if(job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach ' + name + ' ?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do ?');
        }
    }
}

// Method 1
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('Prit');
designerQuestion('Prit');
designerQuestion('John');

// Method 2
interviewQuestion('teacher')('Prit');
*/



/****************************************
 * Immediately Invoked Function Expressions (IIFE)
*/
/*
// Normal Function
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

// IIFE
(
    function () {
        var score = Math.random() * 10;
        console.log(score >= 5);
    }
)();

// checking data privacy 
//console.log(score);
*/



/*********************************
 *  Closures
*/
/*
// Generic function
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}


// Specific function
var retirementUs = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUs(1990);
retirementGermany(1990);
retirementIceland(1990);

//retirement(66)(1990);
//retirement(65)(1990);
//retirement(67)(1990);

/*
CLOSURE:
An inner function has always access to the varaiables and parameters of its outer function, even after the outer function has returned.
*/

/*
function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is ?');
        }
    } else if(job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach ' + name + ' ?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do ?');
        }
    }
}
*/

/*
// Above function using closures
function interviewQuestion(job) {
    return function(name) {
        if(job === 'designer') {
            console.log(name + ', can you please explain what UX design is ?');
        } else if(job === 'teacher') {
            console.log('What subject do you teach ' + name + ' ?');
        } else {
            console.log('Hello ' + name + ', what do you do ?');
        }
    }
}

interviewQuestion('teacher')('john');

/*
The difference between the two functions is that now, the decision is taken right inside of the function that we return, and that's possible because we can use the job variable to take this decision here, even after the interviewQuestion function has already returned.
*/




/***************************************
 * Bind, call and apply
 */
/*
var john = {
    name: 'John',
    age: 20,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old.');
        } else if(style === 'friendly') {
            console.log('Hey! what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + ' .');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 25,
    job: 'designer'
}

// normal function call
john.presentation('formal', 'morning');

// call method
john.presentation.call(emily, 'friendly', 'afternoon');

// apply method
john.presentation.apply(emily, ['formal', 'evening'])

// bind method
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');
*/

/*
Bind method is similar to call function. The difference is tha t the bind function does not immediately call the fucntion. But instead it generates the copy of the function so that we can store it somewhere.
*/



/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

(
    function() {
        function Question(question, answers, correct) {
            this.question = question;
            this.answers = answers;
            this.correct = correct;
        }
        
        Question.prototype.displayQuestion = function() {
            console.log(this.question);
        
            for(var i = 0; i < this.answers.length; i++) {
                console.log(i + ': ' + this.answers[i]);
            }
        }
        
        Question.prototype.checkAnswer = function(ans) {
            if(ans === this.correct) {
                console.log('Correct answer!');
            } else {
                console.log('Wrong answer! Try again.');
            }
        }
        
        var q1 = new Question('Do you enjoy programming?', ['yes', 'no'], 0);
        
        var q2 = new Question('Which is your favourite programming language?', ['Javascript', 'Python', 'C', 'C++'], 1);
        
        var q3 = new Question('What describes programming best?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
        
        var questions = [q1, q2, q3];
        
        var randomQuestion = Math.floor(Math.random() * questions.length);
        
        questions[randomQuestion].displayQuestion();
        
        var answer = parseInt(prompt('Please select the correct answer.'));
        
        questions[randomQuestion].checkAnswer(answer);
    }
)();