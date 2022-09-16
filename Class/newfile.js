class car{
    constructor(name, year, number) {
        this.name = name;
        this.year = year;
        this.number = number;
    }
    available() {
        console.log(this.name + " " + "is available");
    }
}
const bmw = new car("bmw", 2022, "nh0056s");
const od = new car("OD", 2022, "ns5600s")
 od.available();