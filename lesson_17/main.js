var counter = (function () {
    var count = 0;
    return function (num) {
        return num !== undefined ? count = num : ++count;
    };
}());
console.log(counter());
console.log(counter());
console.log(counter(10));
console.log(counter());
console.log(counter());
console.log(counter(50));
console.log(counter());
console.log(counter());


function pow (x,n) {
    if (n !== 1) {
    return x *= pow(x, n - 1);
    } 
    else {
    return x;
    }
}
console.log(pow(2,4));


function someFunction (x, n, callback) {
    var numb = function pow (x,n) {
        if (n !== 1) {
        return x *= pow(x, n - 1);
        } 
        else {
        return x;
        }
    }
    callback(pow(x,n));
};
someFunction(2, 5, function(num) {
    console.log('Результат ' + num);
});


var Human = {
    constructor: function (name, age, gender, hobbies) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hobbies = hobbies;
        return this;
        
    } 
};

var human1 = Object.create(Human).constructor('Jhon', 20, 'male', 'play football');
var human2 = Object.create(Human).constructor('Alex', 35, 'male');
var human3 = Object.create(Human).constructor('Diana', 26, 'female', 'play voleyball');
var human4 = Object.create(Human).constructor('Mary', 23, 'female', 'reading');
console.log(human1.name + ', ' + human1.age + ', ' + human1.gender + ', ' + human1.hobbies);
console.log(human2.name + ', ' + human2.age + ', ' + human2.gender);
console.log(human3.name + ', ' + human3.age + ', ' + human3.gender + ', ' + human3.hobbies);
console.log(human4.name + ', ' + human4.age + ', ' + human4.gender + ', ' + human4.hobbies);


var greet = function(){
    return 'Hello! My name is ' + this.name + ' and I really like ' + this.hobbies;
}
var person1 = {
    name: 'Alex',
    hobbies: 'running',
    greet: greet
}
var person2 = {
    name: 'Diana',
    hobbies: 'reading',
    greet: greet
}
console.log(person1.greet());
console.log(person2.greet());

var human = {
    name: 'Mary',
    _height: 180,
    get height(){
        return this._height;
    },
    set height(value){
        this._height = value;
    }
};
console.log(human.height);

