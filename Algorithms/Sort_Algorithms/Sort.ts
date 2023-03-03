// run all sort algorithms here
import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import SelectionSort from "./SelectionSort";
import MergeSort from "./MergeSort";
import QuickSort from "./QuickSort";
import HeapSort from "./HeapSort";
import CountingSort from "./CountingSort";
import GenerateArray from "../../Support_Functions/generateArray";
import Debugger from "../../Support_Functions/Debugger";

const nums: Array<number> = GenerateArray.random(1000, 1, 10000);
const copy: Array<number> = nums.slice();
console.log("========================================");
console.log("An array is generated:");
console.log(JSON.stringify(nums));
console.log("========================================");

console.time("Sort time: ");
console.log("Sort begins...");
// BubbleSort.sort(nums); // in-place sort
// InsertionSort.sort(nums); // in-place sort
// SelectionSort.sort(nums); // in-place sort
// console.log(MergeSort.sort(nums)); // not-in-place sort
// QuickSort.sort(nums); // in-place sort
// HeapSort.sort(nums); // in-place sort
CountingSort.sort(nums); // in-place sort
console.log(JSON.stringify(nums));
console.log("Sort done");
console.timeEnd("Sort time: ");

Debugger.sortDebug(copy, nums);
