const person = {
    fullName: function () { return  this.firstName + ' ' + this.lastName;
    }
};
const person1 ={
    firstName:"md",
    lastName:"nahid"
}

const person2 ={
    firstName:"nahid",
    lastName:"ferdaos"
}

console.log(person.fullName.call(person1));