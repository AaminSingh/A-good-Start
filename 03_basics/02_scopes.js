//var c = 300
let a = 300  //global value
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);     //the inner fxnn can call the outer fxn but the outer fxn cannot xall th inner fxn 
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){          //here the function is just declared
    return num + 1
}



addTwo(5)                       //here the function is stored alonwith declaring it........
const addTwo = function(num){
    return num + 2
}