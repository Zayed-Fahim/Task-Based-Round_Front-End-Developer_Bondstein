const findIndices = (arrayList, targetNumber) => {
  let start = 0;
  let end = arrayList.length - 1;
  for (; start < end; ) {
    const calculatedSum = arrayList[start] + arrayList[end];
    if (calculatedSum === targetNumber) {
      return [start, end];
    } else if (calculatedSum < targetNumber) {
      start++;
    } else {
      end--;
    }
  }
  return [];
};

const generateLargeList = () => {
  let list = [];
  let maxNumber = 1000;
  for (let i = 1; i <= maxNumber; i++) {
    list.push(i);
  }
  return list;
};

let array_list = generateLargeList();
let target_number = 10;
const result = findIndices(array_list, target_number);
console.log(result);
