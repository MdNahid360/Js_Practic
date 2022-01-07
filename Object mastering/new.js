class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const ans = new Person('md ', 'nahid', 55000)
const newPerson = new Person('mh', 'murshed', 60000)
const newPerson2 = new Person('mh', 'murshed2', 70000)
const newPerson3 = new Person('md', 'robin', 80000)
console.log(ans, newPerson, newPerson2, newPerson3);


class Hackers {
    constructor(contry, name, age, gender, phone) {
            this.contry = contry;
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.phone = phone;
    }
}
const user1 = new Hackers('BD', 'md ferdaos','18','male',880130000000)
console.table(user1);

class friends{
    constructor(name, age, gender, phone){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
    }
}
const murshed = new friends('mh murshed', 21,'male',8801388);
console.log(murshed);