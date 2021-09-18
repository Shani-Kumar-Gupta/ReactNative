let data = ['Shani', 'GLA University', 171500308];
console.log(typeof data); // output: Object

// Array element iteration
//Method 1
console.log("Method 1");
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}

//Method 2
console.log("Method 2");
for (let d of data) {
    console.log(d);
}

//Method 3
console.log("Method 3");
data.forEach(d => {
    console.log(d);
});