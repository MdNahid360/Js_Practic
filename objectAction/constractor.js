function User(firstName,lastName,number, email,gender) {
    this.number = number;
    this.email = email;
    this.gender = gender
   return  this.fullName = firstName + " " + lastName;
}

const nadir = new User("md", "nahid",1313531371,"nahid@example.com","male");
User.prototype.country = "Bangladesh";
User.prototype.age = 19;
User.prototype.age = 19;
console.dir(nadir.age,nadir.country);