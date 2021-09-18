const person = {
    name: 'Shani Kumar Gupta',
    college: 'GLA University',
    branch: 'B.TECH',
    course: 'Computer Science and Engineering'
}

const printName = (personData) => {
    return personData.name;
}

console.log(printName(person));

const printCollege = ({ college }) => { // Object Destructuring
    return college;
}

console.log(printCollege(person));

const { name, branch, course } = person;
console.log(name, branch, course);

// Array destructure
const hobby = ['Swimming', 'Programming', 'Reading'];
const [hobby1, hobby2] = hobby;
console.log(hobby1, hobby2);