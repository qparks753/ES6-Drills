    //Template Literals and Default Parameter Values
//function favMovie(name="Tommy Wiseau",movie="the room"){
//    console.log(`my name is ${name} and my favorite movie is ${movie}`); 
//}
//favMovie("The Karate Kid");
//favMovie();
//favMovie("Daniel", "Avatar");
    //Arrow Functions
// let favMovie = (name="Tommy Wiseau",movie="the room")=> console.log(`my name is ${name} and my favorite movie is ${movie}`); 
// favMovie();
// let getFirstName = (str)=> {
//     let split = str.split(" "); return split[0]
// };
// console.log(getFirstName("Joan Davis"));
// let getFirstNameConcise = (str) => {let split = str.split(" "); return split[0]};
// console.log(getFirstNameConcise("David Johnson"));

// let doMath = {exponent:(x,y)=>{return x**y}, multiply:(x,y)=>{return x*y} };
// //console.log(doMath.exponent(3,4));
// //console.log(doMath.multiply(3,4));
// console.log(`${doMath.exponent(3,4)} ${doMath.multiply(3,4)}`);

// Spread Syntax
let function1 = (name1, location, favFood ) => {console.log(`${name1}, ${location}, ${favFood}`)};
let arr = ["Laura", "Birmingham", "Pizza"];
function1(...arr);
let userName = "Quinton";
let function2 = (para) => {
    let spreadArr = [...para];
    for(i=0;i<spreadArr.length;i++){
         console.log(spreadArr[i]);
    }
};
function2(userName);


