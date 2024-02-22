// const noData = [];
// const apiTrigger = true;
// const userObject = { name: "lakim", role: ["admin"] };
// const fetchData = (trigger, data, object) => {
//   if (trigger) {
//     data.push(object);
//     const userName = data[data.length - 1].name;
//     console.log(`User Name: ${userName}`);
//   } else {
//     console.log("No user message");
//   }
// };
// fetchData(apiTrigger, noData, userObject);

// const items = [{ name: "raktim" }, { name: "ram" }, { name: "hari" }];

// const itemCount = (items) => {
//   return Array.isArray(items) && Array.length > 0 ? Array.length : 0;
// };
// console.log(itemCount(items));

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const combineArray = (firstList, secondList) => {
  return firstList.concat(secondList);
}
const combinedArray = combineArray(firstList, secondList);
console.log(combinedArray);

const calculateGrade = (score) => {
    let grade;
  
    switch (true) {
      case score >= 80-100:
        grade = 'A';
        break;
      case score >= 70-89:
        grade = 'B';
        break;
      case score >= 60-69:
        grade = 'C';
        break;
      case score >= 50-59:
        grade = 'D';
        break;
      default:
        grade = 'F';
    }
  
    return grade;
  };
    const studentScore = 85;
  const studentGrade = calculateGrade(studentScore);
  
  console.log(`Student Score: ${studentScore}`);
  console.log(`Student Grade: ${studentGrade}`);
  
