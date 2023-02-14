//* Selection sort picks the smallest element in the array in each iteration
//* and swap it to the first index of the unsorted area
//* runtime: 0(n^2);
//* space complexity: 0(1);

/**
 * @returns { Object } SelectionSort
 */

export default class SelectionSort {
  constructor() {}

  /**
   * @param nums - an array to sort its elements
   * @returns { void } in-place sort
   */
  public static sort(nums: number[]): void {
    for (let i = 0; i < nums.length - 1; i++) {
      let minIndex: number = i;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[minIndex] > nums[j]) minIndex = j;
      }
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }
}
