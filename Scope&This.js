//Base3.html
// executin contex t -> Js sbse phle jaise hi aapka function dekhta h sbse phle js bananta hai execution context ,ye ek process hjo ki different phases mein chalta h ,memory and execution phase

//Closure

//Private Counter
function countForMe(){
    let c=0;
    return function(){
        c++;
        console.log(c);
    }
}

let fun=countForMe()
fun();

let fun2=countForMe()
fun2();
fun2();

//This

//Manual Binding

//function ko call krte waqt aap set kr skte ho ki uski value ka hogi that is call apply bind

//Call
let obj={
    name:"Lakshya",
}

function abcd(a,b,c){
    console.log(this,a,b,c,)
}

abcd.call(obj,1,2,3);

//apply use for two parameter
abcd.apply(obj,[1,2,3]);

//bind
let func=abcd.bind(obj,1,2,3);  //This doesnotrrun the program make anew copy of the function
func();



