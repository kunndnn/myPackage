// check datatype
function getType(val) {
  if (Array.isArray(val)) return "array";
  if (val === null) return "null";
  return typeof val;
}

// throw error if not valid number
function validNumber(num) {
  if (getType(num) !== "number") throw "Not a valid number";
}

// throw error if not valid string
function validString(str) {
  if (getType(str) !== "string") throw "Not a valid string";
}

// throw error if not a valid array
function validArray(arr) {
  if (getType(arr) !== "array") throw "Not a valid array";
}

// sum given numbers sum(1,2,3,4)
export function sum(...args) {
  let total = 0;
  for (let index = 0; index < args.length; index++) {
    total += args[index];
  }
  return total;
}

// multiply given numbers multiply(1,2,3,4)
export function multiply(...args) {
  let total = 1;
  for (let index = 0; index < args.length; index++) {
    total *= args[index];
  }
  return total;
}

// return factorial of number
export function factorial(num) {
  validNumber(num);
  if (num < 1) throw "Invalid number to calculate factorial";
  let result = 1;
  while (num > 1) {
    result *= num;
    num--;
  }
  return result;
}

// convert string to array
export function strToArray(str) {
  validString(str);
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str[i]);
  }
  return result;
}

// returns star
export function starPattern(num) {
  validNumber(num);
  let result = "";
  for (let i = 1; i <= num; i++) {
    for (let star = 1; star <= i; star++) {
      result += `*`;
    }
    result += `\n`;
  }
  return result;
}

// returns reverse star
export function starReversePattern(num) {
  validNumber(num);
  let result = "";
  while (num >= 1) {
    let star = num;
    while (star >= 1) {
      result += `*`;
      star--;
    }
    result += `\n`;
    num--;
  }
  return result;
}

// checks if string is isPalindrome or not
export function isPalindrome(str) {
  validString(str);
  let result = false;
  let reverse = "";
  const strLength = str.length;

  for (let i = 0; i < strLength; i++) {
    const element = str[strLength - (i + 1)];
    reverse += element;
  }

  if (str === reverse) return true;
  return result;
}

// return unique values of an array
export function uniqueArray(arr) {
  validArray(arr);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        found = true;
        break;
      }
    }
    if (!found) result.push(arr[i]);
  }
  return result;
}
