//this is the function for immediatily called function in javaScript
//this is the anonoymous + immediatily called
//here we check a no is even or not

var result=( function(a){
    var result;
    if(a%2 == 0){
        result ="even";
    }else{
        result ="not even"
    }
    return result;
})(12);

console.log(result);