// // let acId = 123;
// // var accemail = "mayank@gmail.com";
// // const accpassword= 1008;

// // // changes values in email accemail="abc@gmail.com";
 

// // // console.log(acId);
// // // console.log(accemail);
// // // console.log(accpassword);

// // console.table([acId,accemail,accpassword]);
// // prefer not to use var  

//  let name ="mayank"
//  let age = 18
//  let isloggedIn = false

// //  number => to power 53
// // bigint 
// // string =>""
// // boolean => true/false
// // null
// // undefined =>
// // symbol => unique

// // object //
// console.log(typeof undefined);

// let isloggedIn = 1
// let booleanIsLoggedIn = Boolean(isloggedIn)
// console.log(booleanIsLoggedIn);

// 1=>true; 0 => false
// "" => false
// "mayank" => true
//  operations 
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// comparison op //

// console.log(null > 0); => false
// console.log(null == 0); => false
// console.log(null >= 0); => true

// data type in javascript//
// primitive //
// 7 data type : string,number,boolearn,null//

// Non primitive //
// array[],object{},function
// array ex 
//const heros = ["mayank","pipaliya","surat"]
// object ex
// let myObj={
//     name: "mayank",
//     age: 22,

// }
 
// function ex
//const myFunction = function(){
  //  console.log("hello");}



// string in js //
//  const gameName =new String('mayank')


//  console.log(gameName.charAt(1));
//  console.log(gameName.indexOf('n'));
 
// number and math //

// const score = 200
// console.log(score);


//  const balance = new Number(100)
//  console.log(balance)
//String meth //
//const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++math+++++++++
// console.log(Math);
// console.log(Math.min(1,2,3,4,5,6));
// console.log(Math.max(1,2,3,4,5,6));
// console.log(Math.random()*10+1);

 
//  date and time ++++++++++++++++++++++++++++++++++++
// let mydate = new Date()
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toLocaleDateString());
  

// let mytimestamp = Date.now()

// console.log(mytimestamp);

//+++++++++++++++++Array in javascript ++++++++++++++++++++++++++++

// array declaration//
// const myArr = [0,1,2,3,4,5,6,7]
// const myHeors = ["balveer","banten"]
 
// const myArr2 = new Array(1,1,1,)


//  console.log(myArr[1]);

// array methods
// pop and push method in array
// myArr.push(6)
// myArr.pop()
// console.log(myArr);


// this methos is marg array in js //++++

// const heros = ["suparman","balveer"]

// const heros2 = ["jay","verru"]

// const allheros = heros.concat(heros2)
// console.log(allheros);

// marg but two method //++++++++++++++
// const heros = ["suparman","balveer"]

// const heros2 = ["jay","verru"]


// const allheros = [...heros, ...heros2]
// console.log(allheros);


//++++++++++++++++++ object imp  +++++++++++++++++++//
//object literals
// object declaration 
// const  jsUser = {
//     name: "mayank",
//     age: 19,
//     location: "surat",
//     email: "mayank@gmail.com",
//     isLoggedIn: false
// }
// // how to access object  
// console.log(jsUser["age"]);

// method two 

// const xyzUser ={}

// xyzUser.id = "123abc"
// xyzUser.name = "mayank"
// xyzUser.isLoggedIn = false

// // console.log(xyzUser);


// const regularUser ={
//   email: "abc@.com",
//   fullname:{
//     userfname:{
//       fname: "pqr",
//       lname: "ppp"
//     }
//   }
// }
// console.log(regularUse);
// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}

//  const obj3 = {...obj1, ...obj2}
//  console.log(obj3); 

//++++++++++++++function imp +++++++++++++++//
// function carCollation(){
//       console.log("fortunar");
//       console.log("Audi");
//       console.log("Range Rover");
//       console.log("KIA");  
//       console.log("G-vagon");
      
// }

// carCollation()  // function call
// ++++++++++++++++++++++++++++++++++++++++++++++++
// function addtwoNumber(number1,number2){
//   // let result = number1 + number2
//   // return result
//   return number1 + number2
// }

// const result = addtwoNumber(3, 4)
// console.log("Result: ", result);

// +++++++++++

// function calculateCartprice(...num1){
//   return num1 
// }
// console.log(calculateCartprice(222,223,444));

//  function 

// function one(){
//   const username = "mayank"
//   function two(){
//     const wesite ="youtube"
//     console.log(username);
    
//   }
//   // console.log(wesite);
//   two()
// }
// one() 

//++++++++

// console.log( addone(5))
// function addone(num){
//   return num + 1
// }

//  addone(5)

 
// const addtwo = function(num){
//   return num + 2

// }
// addtwo(5)

//++++++++++++++++++arro function used this key word+++
// const user = {
//   username: "mayank",
//   price: 1999,

//   welcomeMassage: function(){
//     console.log(`${this.username},welcome to website`);// acces using this keyword
    
//   }
// }
// user.welcomeMassage()

// arro function 
// function chai(){
//   console.log(this);
  
// }
// chai( )

// control flow if else conditional stat <, >, <=,>=, ==, !=, ===

//  if(condition){
//   //code.....
//  }
//  const balance = 1000
// if(balance < 200){
//   console.log("less than");
  
// }else if(balance < 759){
//   console.log("less than759");
  
// }else{
//   console.log("less than etc");
  
// }

// const userLoggedIn = true
// const debitCard = true

// if(userLoggedIn && debitCard){
//   console.log("Allow to buy course");
  
// }
// switch ++++++++++++++++++++++++++++++++++
// switch (key){
//   case value:

//   break;

//   default:
//      break;
// }
//exampale
// const month = 3

//  switch (month) {
//   case 1:
//     console.log("jan");
//     break;
//   case 2:
//     console.log("feb");
//     break;
//   case 3:
//     console.log("march");
//     break;
  
     
//   default:
//     console.log("default");
    
//     break;
//  }

//+++++++++++++++++++ loop in javascript 
// for 
// ex 1 to 10 number print
// for (let index = 0; index < 101; index++) {
//   const element = index;
//   console.log(element);
// }
// loop ni andar loop in js+++
// for (let i = 1; i <= 10; i++) {
// // console.log(`Outer loop value: ${i}`);
  
//     for (let j = 1; j <= 10; j++) {
//   //    console.log(i + '*' + j + '=' + i*j );

//     }
// }


// let myArr = ["flash", "batman" ]

// for (let index = 0; index < myArr.length; index++) {
//   const element = myArr[index];
//   console.log(element);

// array in push method 
//array_name.push("xyz");
  
// }

//+++++++++++++ while do while //

// let index = 0
// while (index <= 10) {
//   console.log(`value of index is ${index}`);
//   index = index + 2
// }
  

//freecode camp
//string concate 
// const fristName = "mayank j pipaliya";

// const secoundName = "my full name"+ fristName + ".";
// console.log(secoundName);

// two method++++++++++++++++++++++++++
// const subject = "JavaScript";
// const topic = "strings";

// // const sentence = `Today, you will learn about  ${topic} in ${subject}.`
// // console.log(sentence)
/////////////////////////OR/////////////////////////
// console.log(`today, you will learn about ${topic}.`);
// console.log(topic.length); // length key used count of word length 


////////////////////////+++++++++++++math++++++/////////////
// console.log("Now, generate a random number between two values.");

// const min = 1;
// const max = 100;

// const randomNum2 = Math.random() * (max - min) + min;
// console.log(randomNum2);

//+++++++++++++++++++++++++++++++++++finde the mini and max number ++++++++++++++++++++++++++++++//////////////////////
// const maxNum = Math.max(1,2,3,4,5,6,7,8,9);
// console.log(maxNum);

// const minNum = Math.min(1,2,3,4,5,6,7,8,9);
// console.log(minNum);


/////////////////////////////////++++++++++++++++function tru calculator ++++++++++++++++++////////////////////

// function calculatorSum(num1,num2) {
//   return num1 + num2;
  
// }
// // call function 

// console.log(calculatorSum(10,5));

// console.log(calculatorSum(5,5));



