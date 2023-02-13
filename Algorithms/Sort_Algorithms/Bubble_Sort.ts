//* Bubble sort is a in-place algorithm
//* runtime: 0(n^2);
//* space complexity: 0(1);

class BubbleSort {
  public static sort(nums: number[]): void {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length - 1 - i; j++) {
        if (nums[j] > nums[j + 1])
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      };
    };
  };
};

// const nums: number[] = [1, 8, 7, 5, 4, 3, 7, 9];
// BubbleSort.sort(nums)
// console.log(nums);

export default BubbleSort;