function impot(age,sexe){

    if(age>20 && sexe == "homme"){
        console.log("L'habitant est imposable.");
        }
    else if (sexe == "femme" && age > 18 && age < 35){
        console.log("L'habitant est imposable.");
        }
    else {
        console.log("L'habitant n'est pas imposable.");
        } 
}

impot (10,"homme");
