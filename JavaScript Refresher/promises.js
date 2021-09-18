//async code and sync code

// sync code example: Order of execution matters
console.log("Sync code");
let data = 'Shani Kumar Gupta';
console.log(data);


// async code example: Order of execution doesn't matters
setTimeout(() => {
    console.log('Timer done!');
}, 3000); // It will execute later after finishing all execution
// it will not block code execution

console.log('Hello');

setTimeout(() => {
    console.log('Timer2 done!');
}, 1000);

console.log('Hi');
