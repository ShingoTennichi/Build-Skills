// LeetCode 912
// runtime: O(n log n)
// space complexity: O(n);

export default class HeapSort {
  constructor() {}

  public static sort(nums: Array<number>) {
    let length: number = nums.length;
    // make heap structure
    for (let i = Math.floor(length / 2); i >= 0; i--) {
      this.heapify(nums, length, i);
    }

    for (let i = length - 1; i >= 0; i--) {
      // index 0 is always largest so swap it to the back one by one
      this.swap(nums, 0, i);
      this.heapify(nums, i, 0);
    }
  }

  private static heapify(
    nums: Array<number>,
    length: number,
    index: number
  ): void {
    let largest: number = index;
    let l_child: number = index * 2 + 1;
    let r_child: number = index * 2 + 2;

    // find the largest
    if (l_child < length && nums[largest] < nums[l_child]) {
      largest = l_child;
    }
    if (r_child < length && nums[largest] < nums[r_child]) {
      largest = r_child;
    }

    if (index !== largest) {
      // swap the largest to its parent
      this.swap(nums, index, largest);
      // pass the swapped largest(previously index) to heapify
      this.heapify(nums, length, largest);
    }
  }

  private static swap(
    nums: Array<number>,
    index1: number,
    index2: number
  ): void {
    [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
  }
}
