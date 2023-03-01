// run all sort algorithms here
import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import SelectionSort from "./SelectionSort";
import MergeSort from "./MergeSort";
import QuickSort from "./QuickSort";
import GenerateArray from "../../Support_Functions/generateArray";
import Debugger from "../../Support_Functions/Debugger";
import HeapSort from "./HeapSort";

const nums: Array<number> = GenerateArray.random(1000, 1, 10000);
const copy: Array<number> = nums.slice();
console.log("========================================");
console.log("An array is generated:");
console.log(JSON.stringify(nums));
console.log("========================================");

console.time("Sort time: ");
console.log("Sort begins...");
// BubbleSort.sort(nums);
// InsertionSort.sort(nums);
// SelectionSort.sort(nums);
// console.log(MergeSort.sort(nums)); // not-in-place sort
// QuickSort.sort(nums); // in-place sort
HeapSort.sort(nums);
console.log(JSON.stringify(nums));
console.log("Sort done");
console.timeEnd("Sort time: ");

Debugger.sortDebug(copy, nums);
