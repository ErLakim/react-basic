const btn = document.getElementById("formBtn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const form = document.getElementById("contactUs");
  const formData = new FormData(form);
  const obj = {};
  formData.forEach((val, key) => {
    obj[key] = val;
  });
  console.log({ obj });
});


// const getForm = () => {
//   const form = document.getElementById("contactUs");
//   const formData = new FormData(form);
// const obj ={};
// formData.forEach((val,key)=>{
//   obj[key]=val;
// });
// console.log({obj});
// };

// const getSlider = () => {
//   const age = document.getElementById("age").value;
//   document.getElementById("rangeVal").innerHTML = age;
// };

// const getGender = () => {
//   const btns = document.querySelectorAll('input[name="gender"]');
//   let answer;
//   for (const btn of btns) {
//     if (btn.checked) {
//       answer = btn.value;
//       break;
//     }
//   }
//   document.getElementById("gender").innerHTML = answer;
// };

// const getName = () => {
//   const val = document.querySelector('input[name="name"]').value;
//   document.getElementById("nameVal").innerHTML = val;
// };
