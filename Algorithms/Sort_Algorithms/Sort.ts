// run all sort algorithms here
import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import SelectionSort from "./SelectionSort";
import MergeSort from "./MergeSort";

const nums: Array<number> = [
  91, 8456, 786, 500, 47, 343, 1237, 19, 89, 345, 4575, 86, 23, 465, 546,
];

console.time();
// BubbleSort.sort(nums);
// InsertionSort.sort(nums);
// SelectionSort.sort(nums);
console.log(MergeSort.sort(nums)); // not-in-place sort
// console.log(nums);
console.timeEnd();
