const user = {
    id: 1,
    firstName: 'md',
    lastName: 'nahid',
    email : 'nahid@example.com'
}

 Object.defineProperty(user, 'fullName',{
    get : function() {
        return this.firstName + " " + this.lastName;
    }
 });

 console.table(user.fullName);