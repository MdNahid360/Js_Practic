class students{
    constructor(name, id, department, category, year){
        this.name = name;
        this.id = id;
        this.department = department;
        this.category = category;
        this.year = year;
    }

    age(){
        let date = new Date();
        return date.getFullYear()-this.year
    }
}
const murshed = new students("mh murshed", 1, "cst","Developer",2020);
const nahid = new students("nahid", 2, "cst","Developer",2020);
const nadim = new students("nadim hassan", 3, "cst","Developer",2020);
const robin = new students("robin khan",4 , "cst","Developer",2010);

console.table(robin);
console.table(`${robin.age()} year ago`);
