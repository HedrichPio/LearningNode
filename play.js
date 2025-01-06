//same object defined in 3 different ways

const person = {
    name:'Hedrich',
    age:25,
    greet: () => { console.log('Hi, I am ' + this.name); }
};

const person2 = {
    name:'Hedrich',
    age:25,
    greet: function(){ console.log('Hi, I am ' + this.name); }
};

const person3 = {
    name:'Hedrich',
    age:25,
    greet(){ console.log('Hi, I am ' + this.name); }
};

console.log(person)

//person.greet() will log undefined for this.name as the this keyword refers to the global scope.
person2.greet();