// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

// function feetToInch (feet){
//     const inch = feet *12 ;
//     return inch ;
// }

// const nanNumber = feetToInch(25);
// console.log(nanNumber)


// একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 
// function centimeterToMeter (centimeter){
//     const meter = centimeter * 0.01 ;
//     return meter ;
// }
//  const addGet = centimeterToMeter(25);
//  console.log(addGet)

// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

// এইবার ভালো করে খেয়াল করো। 

// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 



// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

// উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 
// function paperRequirements (book1 , book2 , book3){
//     const totallPageBook1 = book1 * 100;
//     const totallPageBook2 = book2 * 200;
//     const totallPageBook3 = book3 * 300;
//     const totallPageOfBook = totallPageBook1 + totallPageBook2 + totallPageBook3 ;
//     return totallPageOfBook ;
// }
// const bookPage = paperRequirements(5 ,5 ,5) ;
// console.log(bookPage);

// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
// function bestFriend (friendss){
//     let nameCheck = friendss[0] ;
//     for( var i =0 ; i<friendss.length; i++){
//         const element = friendss[i];
//         if( element.length > nameCheck.length){
//             nameCheck=element;
//         }
//     }
//     return nameCheck;

// }
// const list = ['jamal','kamalea','sumonasakdja','habulsfsafsaasfas']
// const friendList = bestFriend(list);
// console.log(friendList);



// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য এর চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 
function onlyPositive (numbers){
    let numberCollection = [];
    for (const element of numbers) {
        if (element < 0) { break; }
        numberCollection.push(element);
    }
    return numberCollection
}

const list = [2,4,5,69,8,7,6,2,5,-3,-4,6]
const friendList = onlyPositive(list);
console.log(friendList);