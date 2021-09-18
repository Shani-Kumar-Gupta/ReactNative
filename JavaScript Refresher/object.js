const data = {
    firstName: 'Shani',
    middleName: 'Kumar',
    lastName: 'Gupta',
    college: 'GLA University',
    rollNumber: 171500308,
    getFullName: function () {
        return this.firstName + ' ' + ' ' + this.middleName + this.lastName;
    },
    getCollegeName() {
        return this.college;
    },
    getRollNumber: (rollNumber) => {
        return rollNumber;
    },
    // getRollNumber: () => {
    //     return this.rollNumber;
    // }
}

console.log("Roll Number: ", data.getRollNumber(data.rollNumber));