/////////////////////////////////////////////////////التمرين الاول/////////////////////////////////////////////////////
// let success = false;
// console.log(
//   ":مرحبا بك في برنامج توظيف المبرمجين , يرجى الاِجابة عن الاسئلة التالية"
// );

// const language = ["html", "css", "javascript ", "swift", "java", "PHP"];

// console.log(" ");

// console.log(":لغات البرمجة");
// for (let i = 0; i < language.length; i++) {
//   console.log(i + 1 + ". " + language[i]);
// }

// console.log(" ");

// while (success == !true) {
//   let username = prompt("ما اسمك؟");
//   let age = parseInt(prompt("كم عمرك؟"));
//   let experince = parseInt(prompt("كم عدد سنوات الخبره لديك ؟"));
//   let needed_language = 3;

//   let firstLang = parseInt(
//     prompt("اختر لغة تتقنها من لغات البرمجة المذكورة باِدخال رقمها")
//   );

//   let lastLang = parseInt(prompt("اختر لغة أخرى"));

//   if (
//     (age > 25 && age < 40 && experince > 3 && firstLang == needed_language) ||
//     lastLang == needed_language
//   ) {
//     console.log("مرحبا بك في العمل معنا");
//     success = true;
//   } else {
//     console.log("نأسف, انت لست رائعا بالشكل الكافي للعمل معنا");
//   }
// }
/////////////////////////////////////////////////////التمرين الاول/////////////////////////////////////////////////////

/////////////////////////////////////////////////////التمرين الثاني/////////////////////////////////////////////////////

// function logger(temps) {
//   for (let i = 0; i < temps.length; i++) {
//     console.log(temps[i]);
//   }
// }

// function temp2(temps) {
//   for (let i = 0; i < temps.length; i++) {
//     result.push(parseInt((temps[i] - 32) * (5 / 9)));
//   }

//   return result;
// }

// function temp3(temps, minvalue) {
//   for (let i = 1; i < temps.length; i++) {
//     if (temps[i] > minvalue) {
//       hottest.push(temps[i]);
//     }
//   }
//   return hottest;
// }

// let fahrenheit = [32, 35, 42, 45, 50, 60];
// let minvalue = 45;
// let hottest = [];
// let result = [];
// function allFunctions(fahrenheit, minvalue) {
//   logger(temp2(temp3(fahrenheit, minvalue)));
// }

// allFunctions(fahrenheit, minvalue);

let firstI = parseInt(document.getElementById("quizes").value);
let secondI = parseInt(document.getElementById("midterm").value);
let thirdI = parseInt(document.getElementById("finaltest").value);
let fourthI = parseInt(document.getElementById("oral").value);
let btn = document.getElementById("buton");

btn.addEventListener("click", function () {
  firstI = firstI * 0.1;
  secondI = firstI * 0.25;
  thirdI = firstI * 0.5;
  fourthI = firstI * 0.15;
  let sum = firstI + secondI + thirdI + fourthI;
  let input = document.getElementById("text3");
  input.innerHTML = sum;
});
