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

//console.log(person)

//person.greet() will log undefined for this.name as the this keyword refers to the global scope.
//person2.greet();


//Arrays
const hobbies = ['Sports','Cooking'];

//Looping through array using For Loop
for (let hobby of hobbies){
    console.log(hobby);
}

//map() method used on array to create a new array after making changes or updates using a function which is passed to the method
console.log(hobbies.map((hobby) => {return 'Hobby: ' + hobby}));

//adding new element to array
hobbies.push('Programming');

//copying an object (spread operator)
const copiedPerson = {...person}

//copying an array 
//spread operator
const copiedHobbies = [...hobbies]

//slice operator
const copiedHobbies2 = hobbies.slice();

//if number of args are not known in a function
//use ... rest operator to merge the args into an array
const toArray = (...args) => {
    //will return an array
    return args;
};


//destructuring objects
// if a property of an object needs to be directly used
const printName = ({name})=>{
 console.log(name);
}

printName(person)

// destructuring outside of a function
// variable names should be same as property names
// new variables name and age will have the values from the person object
const {name,age} = person;

// destructuring arrays
// variable names can be anything
const [hobby1,hobby2] = hobbies
console.log(hobby1,hobby2)