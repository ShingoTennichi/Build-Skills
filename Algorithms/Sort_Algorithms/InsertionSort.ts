//* runtime: 0(n^2);
//* space complexity: 0(1);

/**
 * @returns { Object } InsertionSort
 */
export default class InsertionSort {
  constructor() {}

  /**
   * @param { number[] } nums - an array to sort its elements
   * @returns { void } in-place sort
   */
  public static sort(nums: number[]): void {
    for (let i = 1; i < nums.length; i++) {
      const target: number = nums[i];
      let j: number = i - 1;
      while (j >= 0 && nums[j] > target) {
        nums[j + 1] = nums[j];
        j--;
      }
      nums[j + 1] = target;
    }
  }
}

// e.g. [1, 3, 2];

// step1: i = 1, target = 3, nums[j] = 1
// check 1 > 3 => false => nums[j+1] = target
// 1  3  2

// step2: i = 2, target = 2, nums[j] = 3
// check 3 > 2 => true
// 1  3  3

// step3: continue nums[j] = 1
// check 1 > 2 => false => nums[j+1] = target
// 1  2  3