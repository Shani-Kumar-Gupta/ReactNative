// Spread Operator & Rest Parameters

//Object
const person = {
    name: 'Shani Kumar Gupta',
    college: 'GLA University',
    branch: 'B.TECH',
    course: 'Computer Science and Engineering'
}

const copiedPerson = { ...person };
console.log(copiedPerson);

const copiedPerson1 = { ...person, DOB: '01-07-1999' };
console.log(copiedPerson1);

// Array
const data = ['Mouse', 'Laptop', 'Keyboard'];

const cd = [data];
console.log(cd);
const copiedData = [...data];
console.log(copiedData);

const copiedData1 = [...copiedData, 'Mobile'];
console.log(copiedData1);


// Rest Operator
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
}

console.log(toArray(1, 2, 3));
// if I want to return 4 element in an array
// console.log(toArray(1, 2, 3, 4));

const restArray = (...args) => {
    return args;
}

console.log(restArray(12, 2, 34, 56, 7));