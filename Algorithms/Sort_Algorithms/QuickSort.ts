//* runtime: O(n log n), worst case(O^2)
//* space complexity: O(log n)

/**
 * @returns { Object } `QuickSort`
 */
export default class QuickSort {
  constructor() {}

  /**
   * @param { Array<number> } nums
   */
  public static sort(nums: Array<number>) {
    this.quickSort(nums, 0, nums.length - 1);
  }

  /**
   * @param { Array<number> } nums
   * @param { number } left
   * @param { number } right
   * @returns { Array<number> } in-place sort
   */
  private static quickSort(
    nums: Array<number>,
    left: number,
    right: number
  ): Array<number> {
    if (nums.length <= 1) return nums;
    let index: number = this.partition(nums, left, right);
    if (left < index - 1) this.quickSort(nums, left, index - 1);
    if (index < right) this.quickSort(nums, index, right);
    return nums;
  }

  /**
   * @param { Array<number> } nums
   * @param { number } left
   * @param { number } right
   * @returns { Array<number> } index of the partition
   */
  private static partition(
    nums: Array<number>,
    left: number,
    right: number
  ): number {
    // the position of pivot itself can be changed, so the pivot cannot be mid index;
    const pivot: number = nums[Math.floor((left + right) / 2)];
    while (left <= right) {
      while (nums[left] < pivot) left++;
      while (nums[right] > pivot) right--;
      if (left <= right) {
        this.swap(nums, left, right);
        left++;
        right--;
      }
    }
    return left;
  }

  /**
   * @param { Array<number> } nums Target array
   * @param { number } l_index First target index
   * @param { number } r_index Second target index
   */
  private static swap(
    nums: Array<number>,
    l_index: number,
    r_index: number
  ): void {
    [nums[l_index], nums[r_index]] = [nums[r_index], nums[l_index]];
  }

  //* pattern2
  /**
   * @param { Array<number> } nums
   * @returns { Array<number> } sorted array
   */
  // public static sort(nums: Array<number>): Array<number> {
  //   if(nums.length <= 1) return nums;

  //   const mid: number = Math.floor(nums.length/2);
  //   const pivot: number = nums[mid];
  //   const l_arr: Array<number> = new Array(0);
  //   const r_arr: Array<number> = new Array(0);

  //   for(let i = 0; i < nums.length; i++) {
  //     if(i === mid) continue;
  //     if(nums[i] < pivot) l_arr.push(nums[i])
  //     else r_arr.push(nums[i]);
  //   }
  //   return [...this.sort(l_arr),  pivot, ...this.sort(r_arr)];
  // }
}
