// LeetCode 912
// time complexity: O(n + k) ... n = the length of array, k is the range of the minimum and maximum number in the array
// space complexity: O(n) // map store O(n) elements

// [2, 4, 2, 7, 2, 4, 2, 1, 5]
// min => 1
// max => 7
// 1: 1, 2: 4, 4: 1, 5: 1, 7: 1
// => [1, 2, 2, 2, 2, 4, 5, 7]

export default class CountingSort {
  constructor() {}

  public static sort(nums: number[]): void {
    const map: Map<number, number> = new Map();
    let minimum: number = Math.min(...nums);
    let maximum: number = Math.max(...nums);
    // let minimum: number = Number.MAX_SAFE_INTEGER;
    // let maximum: number = Number.MIN_SAFE_INTEGER;
    let index: number = 0;

    // find minimum and maximum, and count each element
    for (let i = 0; i < nums.length; i++) {
      // minimum = Math.min(minimum, nums[i]);
      // maximum = Math.max(maximum, nums[i]);
      map.has(nums[i])
        ? map.set(nums[i], (map.get(nums[i]) as number) + 1)
        : map.set(nums[i], 1);
    }

    while (index < nums.length) {
      while (!map.has(minimum)) minimum++;

      while (map.get(minimum) !== 0) {
        nums[index] = minimum;
        map.set(minimum, (map.get(minimum) as number) - 1);
        index++;
      }
      minimum++;
    }
  }
}