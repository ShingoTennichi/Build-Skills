// LeetCode 912
// time complexity: O(d(n+b)): n = number of elements, d = maxDigits, b = bucket size that is used for counting sort
// space complexity O(n+b)

export default class RadixSort {
  constructor() {}

  public static sort(nums: Array<number>): void {
    // find max absolute number
    let maximum: number = Math.max(...nums.map((el) => Math.abs(el)));
    let maxDigits = 0;

    // 1e-323 is the maximum exponential notation,
    // so after the maximum result will be 0.
    // The result of while loop will be:
    // 1 is 324(1e-324), 10 is 325(1e-325), 100 is 326(1e-326)
    // 1000 is 327(1e-327), 10000 is 328(1e-328) ...
    while (maximum > 0) {
      maxDigits++;
      maximum /= 10;
    }

    let placeValue: number = 1;
    for (let i = 0; i < maxDigits; i++) {
      this.countingSort(nums, placeValue);
      placeValue *= 10;
    }

    const negatives: Array<number> = new Array();
    const positives: Array<number> = new Array();
    nums.map((el) => {
      el < 0 ? negatives.push(el) : positives.push(el);
    });
    negatives.reverse();
    nums = [...negatives, ...positives];
  }

  private static countingSort(nums: Array<number>, placeValue: number) {
    const map: Map<number, Array<number>> = new Map();
    for (const num of nums) {
      let digit: number = Math.floor(Math.abs(num) / placeValue);
      digit = digit % 10;
      map.has(digit) ? map.get(digit)!.push(num) : map.set(digit, [num]);
    }

    let index: number = 0;
    for (let i = 0; i < 10; i++) {
      if (!map.has(i)) continue;
      for (const val of map.get(i) as number[]) {
        nums[index] = val;
        index++;
      }
    }
  }
}
