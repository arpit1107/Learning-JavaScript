//in this file we declare function inside the object

var object={
    name: "Arpit",
    sername: "Katiyar",
    Course: "Computer Science and Engineering",
    Degree: function(){
          return "btech";
        }
};

console.log(object.name);
console.log(object.sername);
console.log(object.Course);
//here we call the function 
console.log(object.Degree());