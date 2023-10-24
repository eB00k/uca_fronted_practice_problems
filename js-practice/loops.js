// 1
let n = 100,
  sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log(sum);

// 2
let fact = 1,
  m = 4;
while (m > 0) {
  fact = fact * m;
  m--;
}
console.log(fact);

// 3
let k = 10;
let fib_seq = [0, 1];
for (let i = 2; i <= k; i++) {
  fib_seq[i] = fib_seq[i - 1] + fib_seq[i - 2];
}
console.log(fib_seq);

// 4  Multiplication Table
let num = 5,
  range = 10;
for (let i = 0; i < range; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}

// 5 Prime numbers
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log("5th task: " + isPrime(17))


// 6 Palindrome numbers
function isPalindrome(word) {
  let l = 0,
    r = word.length - 1;
  while (l < r) {
    if (word[l] !== word[r]) {
      return false;
    }
    l++, r--;
  }
  return true;
}
console.log("6th task: ", isPalindrome("abca"));

// 7 Reverse numbers
function reverseNumber(num) {
  let ans = 0;
  while (num != 0) {
    ans = ans * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return ans;
}
console.log("7th task: ", reverseNumber(12345));

// 8 Count digits
function coutNumber(num) {
  let cnt = 0;
  while (num != 0) {
    cnt++;
    num = Math.floor(num / 10);
  }
  return cnt;
}
console.log("8th task: ", coutNumber(12345));

// 9 Print Patterns 
function printPattern(num) {
    str = ""
    for(let i = 1; i <= num; i++) {
        for(let j = 0; j < i; j++) {
            str += "*";
        }
        str += "\n";
    }
    return str;
}
console.log("9th task: \n", printPattern(5));

// 10 

