export default class GenerateArray {
  constructor() {}

  /**
   * @param { number } size the size of the array
   * @param { number } min minimum number of element
   * @param { number } max maximum number of element
   */
  public static random(
    size: number,
    min: number = 1,
    max: number = 10
  ): Array<number> {
    const arr: Array<number> = new Array(size);
    for (let i = 0; i < size; i++) {
      arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return arr;
  }
}
