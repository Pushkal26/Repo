let userRole ="admin";
let accessLevel;

if(userRole=='admin'){
    accessLevel= "Full access granted";
}else if (userRole == 'manager'){
    accessLevel = "Limited access granted";
}else{
    accessLevel = "No access granted";
}

console.log(" Access Level ",accessLevel)

let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole =='admin'){
        userMessage = "Welcome admin";
    }else{
        userMessage = "Welcome user";
    }
}else{
    userMessage = "Please log in to access the system ";
}

console.log(" User message", userMessage);

let userType = "subscriber";
let userCatergory;

switch(userType){
    case "admin":
        userCatergory = "Administrator";
        break;
    case "manager":
        userCatergory = "Manager";
        break;
    case "subscriber":
        userCatergory = "Subscriber";
        break;
    default:
        userCatergory ="unknown";
}

console.log("User Category: ",userCatergory);

let isAuthenticated =true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";

console.log("Authentication status :",authenticationStatus );