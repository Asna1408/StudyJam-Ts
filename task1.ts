function registerUser(name:string, birthYear:number){
if(checkAge(birthYear)=== true){
    console.log(name,"registered successfully")
}else{
    console.log(name,"failed to register")
}
}

function checkAge(birthYear:number){
    const currentYear = new Date().getFullYear();
    let age: number = currentYear-birthYear;
if(age >=18){
    return true
}else{
    return false
}
}

registerUser('Asna',2008)