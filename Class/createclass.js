//we can create class by two ways 
//class expression and class declaration

//class declaration
class Show{
    constructor(name){
        console.log("name is "+name);
    }
}

const call= new Show('Arpit');

//class expression

var showClass = class{
    constructor(name){
        console.log("Express name"+ name);
    }
};
const call1 = new showClass('Arpit');