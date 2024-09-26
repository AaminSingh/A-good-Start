// when there are multiple cases 
//switch (key) {
//     case value:
        
//         break;

//     default:
//         break;


const month = "march"

switch (month) {
    case "jan":                                       // usually if a case matches so all the case are being executed except the default so break key is required
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;                       // it breaks the control flow
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}