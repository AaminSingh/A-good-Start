// Immediately Invoked Function Expressions (IIFE)


(function chai(){          
    // named IIFE
    console.log(`DB CONNECTED`);  // to remove the pollution caused by global varialble pollution
})();  //====>>> semicolon is required

( (name) => {                     //UNAMED IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
