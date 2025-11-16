// 1 დან n-მდე რიცხვების მასივის შექმნა
function createArray(n) {
  const result = [];
  let i = 1;
  while (i <= n) {
    result.push(i);
    i++;
  }
  return result;
}
console.log(createArray(5));
console.log(createArray(10));

// მასივის შებრუნება
const numbers = [1, 2, 3, 4, 5];
function reverseArray(numbers) {
  let i = numbers.length - 1;
  const result = [];
  while (i >= 0) {
    result.push(numbers[i]);
    i--;
  }
  return result;
}
console.log(reverseArray(numbers));
//ვარიანტი 2
const nums = [1, 2, 3, 4, 5];
function reversArray(nums) {
  nums.reverse();
  return nums;
}
console.log(reversArray(nums));

// მაქსიმალური რიცხვის პოვნა მასივში
const numArray = [2, 6, 4, 3, 7, 5];
function findMaxNumber(numArray) {
  let i = 0;
  let max = numArray[0];
  while (i < numArray.length) {
    if (numArray[i] > max) {
      max = numArray[i];
    }
    i++;
  }
  return max;
}
console.log(findMaxNumber(numArray));

//რამდენჯერ მეორდება ელემენტი მასივში
function howManyTImes(x) {
  let numbers = [1, 2, 4, 2, 6, 6, 2];
  let count = 0;
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] === x) {
      count++;
    }
    i++;
  }
  return count;
}
console.log(howManyTImes(2));
console.log(howManyTImes(6));

//ყველაზე გრძელი სტრინგის პოვნა მასივში
const wordsArray = ["apple", "banana", "watermelon", "kiwi", "strawberry"];
function findLongestWord(words) {
  let i = 0;
  let longestWord = "";
  while (i < words.length) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
    i++;
  }
  return longestWord;
}

console.log(findLongestWord(wordsArray));
