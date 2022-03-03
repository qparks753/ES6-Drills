    //Template Literals and Default Parameter Values
//function favMovie(name="Tommy Wiseau",movie="the room"){
//    console.log(`my name is ${name} and my favorite movie is ${movie}`); 
//}
//favMovie("The Karate Kid");
//favMovie();
//favMovie("Daniel", "Avatar");
    //Arrow Functions
let favMovie = (name="Tommy Wiseau",movie="the room")=> console.log(`my name is ${name} and my favorite movie is ${movie}`); 
favMovie();
let getFirstName = (str)=> {
    let split = str.split(" "); return split[0]
};
console.log(getFirstName("Joan Davis"));
let getFirstNameConcise = (str) => {let split = str.split(" "); return split[0]};
console.log(getFirstNameConcise("David Johnson"));

let doMath = {exponent:(x,y)=>{return x**y}, multiply:(x,y)=>{return x*y} };
//console.log(doMath.exponent(3,4));
//console.log(doMath.multiply(3,4));
console.log(`${doMath.exponent(3,4)} ${doMath.multiply(3,4)}`);

 