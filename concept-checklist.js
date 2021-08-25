// Declare 3 variable in the  
// var cityName = "Dhaka"
// var ageNumber = 67484;
// var isGood = true ;
// console.log(typeof cityName)
// Declare 2 variable let and const and this variable value changing 
// let myAge = 25 ;
// myAge = 4555;
// const myAge = 45 ;
//    myAge =4512;
// console.log(myAge)
// ewsult :TypeError: Assignment to constant variable.
// Simple math prater 
// var a = 25;
// var b =5;
// var result = a+b;
// var result = a-b;
// var result = a*b;
// var result = a/b;
// var result = a%b;
// console.log(result);
// Two variable compaisam
// var a = 25;
// var b = 45 ;
// var comper = a==b;
// var comper = a!=b;
// var comper = a>b;
// var comper = a<b;
// var comper = a<=b;

// console.log(comper)

// Two condition case-1: Both condition full
// var add = 45;
// if( add > 10 &&  200<add) {
//     console.log( "mama Khala hoba")
// }
// else{
//     console.log("tomar khabor asa")
// }

// var korim = 4512;
// if (korim <= 2000 || korim>2) {
//     console.log('tomar kopla dukko asa ')
// }


// While loop to disply 7 to 10 all  number only display odd num,ber incoloding 
// let i =7 ;
// while ( i<=19){
//     if(i % 2 != 0){
//         console.log("The odd number", i)
//     }
//     i++;
// }
// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 
// Deaclar an array number of e lement updating or changing 4 th position changing 
// const ageList = [ 25,26,14,14,3,6,5,48,45,987,78]
// ageList[4] = 777;
// ageList.push(444)
// ageList.pop()
// console.log(ageList)



// তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 
const ageList = [ 25,26,14,14,3,6,5,48,45,987,78]

// for ( i =0 ; i<=ageList.length; i++){
//     var element = ageList[i];
//     console.log(element)
// }
// for( const value of ageList){
//     console.log(ageList);
// }

// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 
//  const numberList = [40 ,50 ,60,80,120,45,0,525,0254,055,45,266554,74,960
// ,82]
//  let numbercont =0
//  for ( let i =0; i<= numberList.length; i++){
//      const element = numberList[i];
//      let numbercont = element
//      if( numbercont>80){
//          console.log(numbercont)
//      }
//  }
//  ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।
// function multiplyNumber (n1,n2,n3){
//     const result = n1 *n2 *n3 ;
//     return result ;
// }
// var naurAdd = multiplyNumber( 5,5,5)
// console.log(naurAdd)
// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 
const person = {
    firstName:"John", 
    lastName:"Doe",
    age:50, 
    eyeColor:"blue"
};
person.age = 25 ;
console.log(person)