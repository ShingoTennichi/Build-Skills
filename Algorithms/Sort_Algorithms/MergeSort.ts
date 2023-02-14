//* Merge sort repeatedly divides input array until each array has one element
//* After the division, sort the elements by comparing
//* runtime O(n log n);
//* space complexity: O(n);

/**
 * @returns { Object } `MergeSort`
 */

export default class MergeSort {
  constructor() {}

  /**
   *
   * @param { Array<number> } nums - Not-in-place sort
   * @returns { Array<number> } The sorted array of `nums`
   */
  public static sort(nums: Array<number>): Array<number> {
    return this.mergeSort(nums);
  }

  /**
   *
   * @param nums
   * @returns { Array<number> }
   */
  private static mergeSort(nums: Array<number>): Array<number> {
    if (nums.length <= 1) return nums;
    const mid: number = Math.floor(nums.length / 2);
    const left: Array<number> = nums.slice(0, mid);
    const right: Array<number> = nums.slice(mid);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  /**
   *
   * @param { Array<number> } l_arr
   * @param { Array<number> } r_arr
   * @returns { { Array<number> } }
   */
  private static merge(
    l_arr: Array<number>,
    r_arr: Array<number>
  ): Array<number> {
    const merged: Array<number> = new Array(0);

    while (l_arr.length && r_arr.length) {
      if (l_arr[0] < r_arr[0]) {
        merged.push(l_arr.shift() as number); // 'as number' remove type error: Array.shift() returns number|undefined
      } else {
        merged.push(r_arr.shift()!); // '.shift()!' is the same as 'as number'
      }
    }

    return [...merged, ...l_arr, ...r_arr];
  }
}

// e.g. [8,7,3,5,9,5,1,11,4]

//              [8,7,3,5,9,5,1,11,4]
//              /                  \
//      [8,7,3,5,9]              [5,1,11,4]
//      /          \             /         \
//    [8,7,3]      [5,9]      [5,1]      [11,4]
//    /     \      /   \     /     \     /     \
//  [8,7]    [3]   [5]  [9] [5]     [1] [11]     [4]
//  /  \      |     |    |   |       |   |        |
//[8]  [7]    |     |    |   |       |   |        |
//  \    /    |     |    |   |       |   |        |
//  [7,8]    [3]   [5]  [9] [5]     [1] [11]     [4]
//    \      /      \   /     \     /     \      /
//    [3,8,7]       [5,9]      [1,5]      [4,11]
//         \         /           \         /
//         [3,5,7,8,9]           [1,4,5,11]
//                \                 /
//               [1,3,4,5,5,7,8,9,11]
