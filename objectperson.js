const person={
    name: "shourya",
    age: "20",
    eMail: "shouryaawasthi45@gmail.com",
    course: "Btech IT",
   
    add: "na"
};
for (const key in person)
{
    if(person.hasOwnProperty(key)){
        console.log(key);
    }
}






