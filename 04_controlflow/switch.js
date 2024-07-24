//syntax
//  switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



const month = "sepo";

switch(month){

    case "january":
        console.log("first month");
        break;
    case "feb":
        console.log("2nd month");
        break;
    case "march":
        console.log("3rd mont");
        break;
    default:   // if any of the value is not matched then we will match this default value if any of the value is selected then default is not executed
        console.log('checkjed');
}

