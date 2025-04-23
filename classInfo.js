class myInfo{
    constructor(name,age,city,course){
        this.name = name;
        this.age= age;
        this.city= city;
        this.course= course;
    }
    display(){
        console.log(`my  name is ${this.name} and age is ${this.age} and my city is ${this.city} and my course is ${this.course}`)

    }
}
let Info = new myInfo("shourya", "20", "lucknow", "btech");
Info.display();