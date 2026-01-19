//Design Pattern

//Module Pattern =>  ek design pattern hai jisme hum aap code ek self executing function(IIFE) ke andar likhte hain ,taki variables aur functions private rahen.......ISke andar se hum sirf whi chize return krte h jo bahr use krni hain.....Is patttern ka mian fayda hai data hiding(encapsulation) aur clean strucure,taki code secure, resuable aur manageable bn ske.

let fun=(function(){
    let bankbalance=120000; //Private variable

    function checkBalance(){
        console.log(bankbalance)
    }

    function setBalance(val){
        bankbalance=val;
    }

    function withdraw(val){
        if(val <= bankbalance){
            bankbalance-=val;
            console.log(bankbalance)
        }
    }

    //Module Pattern
    // return {
    //     checkBalance,
    //     setBalance,
    //     withdraw,
    // };

    //Revealing Module Patter
        return {
        check: checkBalance,
        set: setBalance,
        draw: withdraw,
    };

})();

fun.check();      // 120000
fun.draw(20000);  // 100000
fun.set(60000);
fun.check();      // 60000


//Factory Function PAttern ek aisa design pattern h jisme hum ek simple function likhte h jo naya objects banakar return krta h ,bina class or new keyword use kiye....IS pattern ka main idea h -> object creation ko ek function ke through control krna ...... Har bar jb factory function call krte ho tumhe ek naya object milta hai jisme apne methods aur private data ho skta h....Yeh pattern specially useful hai jb tumhe ke hi type ka bahut sare objects chahiye,jaise users, products,tasks ,etc.


function create(name ,price)
{
    let stock=10;
    return {
        name,
        price,
        buy(qty){
            if(qty<=stock){
                stock-=qty;
                console.log(`booked - ${stock} pieces left`)
            }
            else{
                console.error(`We only have ${stock} `)
            }
        },
        refill(qty){
            stock+=qty;
            console.log(`reflied the stock ${stock} prices now`)
        }
    }
}

let phone=create("iphone",70000)
console.log(phone)
phone.buy(5)
phone.refill(20)

