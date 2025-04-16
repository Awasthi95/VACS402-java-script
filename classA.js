class classA {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log(`person name is ${this.name} and age is ${this.age}`);
    }
}
let myInfo= new classA("Shourya",20);
myInfo.display();