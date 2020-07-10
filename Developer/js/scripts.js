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

function ClickMe() {
  let quiz = parseInt(document.getElementById("quiz").value);
  let mid = parseInt(document.getElementById("mid").value);
  let final = parseInt(document.getElementById("final").value);
  let oral = parseInt(document.getElementById("oral").value);
  let sum = quiz + mid + final + oral;

  let grade;

  switch (true) {
    case sum >= 90 && sum <= 100:
      grade = "A";
      break;
    case sum >= 80:
      grade = "B";
      break;
    case sum >= 70:
      grade = "C";
      break;
    case sum >= 60:
      grade = "D";
    case sum < 60:
      grade = "F";
    default:
      alert("Fill the fields!");
      grade = "";
      sum = "";
  }

  let result = (document.getElementById("text3").innerHTML = sum + " " + grade);
}

function Reset() {
  document.getElementById("quiz").value = "";
  document.getElementById("mid").value = "";
  document.getElementById("final").value = "";
  document.getElementById("oral").value = "";
  quiz = "";
  mid = "";
  final = "";
  oral = "";
}
