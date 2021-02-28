//in this file we create method inside class

class MethodCreate{
    constructor(name){
        this.name=name;
    }
    show(){
        console.log("the name is " + this.name);
    }
}

//calling 

const callClass = new MethodCreate('Arpit katiyar');
callClass.show();