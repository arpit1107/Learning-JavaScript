//this is the fuction practice section
//this program campare the greatest value between three no
//and return it.
function GreatestValue(a,b,c){
    if(a>=b && a>=c){
        return a;
    }else{
        if(b>=a && b>=c){
            return b;
        }else{
            return c;
        }
    }

};

console.log(GreatestValue(12,13,2));
//return 13