const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomList = [];

for (let i = 0; i < 10; i++) {
  randomList.push(Math.floor(Math.random() * 100));
}
console.log(randomList);

// 1st array sum
function sumOfArray(list) {
  return list.reduce((curTotal, item) => {
    return curTotal + item;
  }, 0);
}
console.log("1st task: ", sumOfArray(list));

// 2nd find max/min
function findMaxMin(list) {
  list.sort();
  return `min = ${list[0]}, max = ${list[list.length - 1]}`;
}
console.log("2nd task: ", findMaxMin(randomList));

// 3rd reverse array in place
function reverseArray(list) {
  let l = 0,
    r = list.length - 1;
  while (l < r) {
    let temp = list[l];
    list[l] = list[r];
    list[r] = temp;
    l++, r--;
  }
  return list;
}
console.log("3rd task: ", reverseArray(list));

// 4th rotate array
function rotateArray(list) {
    
}
