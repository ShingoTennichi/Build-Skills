import { Stack } from "../Data_Structure/Stack";

//* Monotonic Stack is a technique to track the difference between two data

//TODO: find index of first higher number on the right by O(n) solution;
//? if there is no higher number, -1 is stored;

const targetArr: number[] = [2, 1, 4, 5, 7, 4, 3, 2, 1, 4, 6, 4, 9, 6, 6, 3];

const indexOfHigherNumber: number[] = new Array(targetArr.length).fill(-1);
const stack: Stack = new Stack();
for (let i = 0; i < targetArr.length; i++) {
  if (!stack.size() || targetArr[stack.top()] > targetArr[i]) {
    // store the indices of the number that is not found the higher number
    stack.add(i);
    continue;
  }

  // while the top of stack is smaller than targetArr[i], remove elements and store i to indexOfHigherNumber
  while (stack.size() && targetArr[stack.top()] < targetArr[i]) {
    const smallerNumIndex: number = stack.remove() ?? -1; //since Stack.remove() returns number|null;
    indexOfHigherNumber[smallerNumIndex] = i;
  }

  // add i to the stack
  stack.add(i);
}

console.log(indexOfHigherNumber);

// input          : [2, 1, 4, 5,  7,  4, 3, 2, 1,  4,  6,  4,  9,  6,  6,  3];
// expected return: [2, 2, 3, 4, 12, 10, 9, 9, 9, 10, 12, 12, -1, -1, -1, -1];
// -1 indicates that the higher number was not found;
