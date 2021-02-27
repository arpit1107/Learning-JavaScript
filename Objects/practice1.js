//in this file we create a object constructor
// like this var date = new Date();
//here Date() is a constructor

function Profile(name,sername,Degree,Stream){
    this.name = name;
    this.sername = sername;
    this.Degree = Degree;
    this.Stream = Stream;
}

var profile = new Profile('Arpit','Katiyar',"Btech","Computer Science and engineering");

console.log(profile.name);
console.log(profile.sername);
console.log(profile.Degree);
console.log(profile.Stream);