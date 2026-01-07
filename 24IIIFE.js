(function chai(){
    // Named IIFE Because it has name chaii
    console.log(`DB COnncected`)
}) () ; // use semicolon to stop this

// GLobal scope ke pollution se problem hoti hai so we use them to remove

( () =>{
    console.log(`DB CONNECT `)
}) () ;

( (name) =>{
    console.log(`DB CONNECT ${name}`)
}) ("Lakshya") ;