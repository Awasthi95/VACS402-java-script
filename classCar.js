class myCar{
    constructor(name,year,model){
        this.name = name;
        this.year= year;
        this.model= model;
    }
    display(){
        console.log(`my car name is ${this.name} and year is ${this.year} and model is ${this.model}`)

    }
}
let car = new myCar("AUDI", "2020", "Q8");
car.display();