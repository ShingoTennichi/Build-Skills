//* Bubble sort is a in-place algorithm
//* runtime: O(n^2);
//* space complexity: O(1);

/**
 * @returns { Object } BubbleSort
 */
class BubbleSort {
  constructor() {}

  /**
   * sort an array in-place
   * @param { Array<number> } nums - an array to sort its elements
   * @returns { void } in-place sort
   */
  public static sort(nums: Array<number>): void {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length - 1 - i; j++) {
        if (nums[j] > nums[j + 1])
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
}

// const nums: Array<number> = [1, 8, 7, 5, 4, 3, 7, 9];
// BubbleSort.sort(nums)
// console.log(nums);

export default BubbleSort;
