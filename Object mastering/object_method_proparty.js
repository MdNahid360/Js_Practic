 const users = {
         name: 'md nahid',
         id: 22,
         selary: 30000,
         getuserInfo: function () {
             console.log(this.name)
         },
         totalSelary: function (amount) {
             this.selary = this.selary - amount;
             return this.selary - amount;
         }
     }

const nahid = {
    name: "mh murshed",
    id: 23,
    selary: 40000
}
console.log(nahid);