var string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, deserunt';
console.log(string);


var human = {
    name: 'Diana',
    age: 29,
    gender: 'female',
    height: 180,
    hobbies: 'reading',
    sayHi: function() {
        return 'Hello ' + human.name;
    }
};
console.log(human);
console.log(human.sayHi());


var i;
for (i=1; i < 21; i++)
if (i%2 == 0) {
    console.log(i);
}


var num = 10*15,
    Status;
switch (num) {
    case 15: Status = 'Мало'; break;
    case 150: Status = 'Правильный ответ!'; break;
    case 1500: Status = 'Неверно'; break;
    default: Status = 'Я таких значений не знаю';
}
console.log(num + ': ' + Status);


var x = 20,
    text = x > 15 ? 'x больше 15' : x < 15 ? 'x меньше 15' : 'x равен 15';
console.log(text);


var i = 0;
while (i < 8) {
    console.log(i);
    i++;
}

function someFunction (arg1, arg2, callback) {
    var numb = 'Число ' + arg1 + ' в степени ' + arg2;
    console.log(numb);
    callback(text);
};
someFunction(2, 4, function() {
    var numb = Math.pow(2,4);
        text = 'Результат ' + numb;
    console.log(text);
});
