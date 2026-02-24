// Task : Check for permissions from roles
const roles={ admin:["read","write"], user:["read"], staff: ["write"]};
const checkRole="user", action="read";

function checkForPermission(checkRole, action){
    
    for(let [key,value] of Object.entries(roles)){
        // search role
        if(key === checkRole){
            return value.includes(action); // more prefferd
            // OR if(value == action){  here we are not checking the type , so it will return true -> logically correct
            //     return true;
            // };
        }
    }
    return false;
}

console.log(checkForPermission(checkRole,action));
