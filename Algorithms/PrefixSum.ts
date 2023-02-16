//* Prefix sum is also called running sum or cumulative sum
//* It can be used to find the sum of the area between two points
//! (The starting point is exclusive)

import GenerateArray from "../Support_Functions/generateArray";

const arr: Array<number> = GenerateArray.random(1000, 1, 10000);
console.log("An array was generated: ");
console.log(JSON.stringify(arr));
const prefixSum: Array<number> = createPrefixSum(arr);
console.log("Prefix sum:");
console.log(JSON.stringify(prefixSum));

const left: number = 245;
const right: number = 389;
const result: number = prefixSum[right] - prefixSum[left];
console.log(`The sum between index ${left} and index ${right} is ${result}`);
checkSum(left, right, result);

function createPrefixSum(arr: Array<number>): Array<number> {
  const sumArr: Array<number> = new Array(arr.length);
  let sum: number = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    sumArr[i] = sum;
  }
  return sumArr;
}

function checkSum(left: number, right: number, result: number): void {
  let sum: number = 0;
  for (let i = left + 1; i <= right; i++) {
    sum += arr[i];
  }
  if (sum === result) console.log("The answer is correct");
  else
    console.log(`The answer is incorrect: result is ${result}, sum is ${sum}`);
}
