// Stack structure;

/**
 * @params
 * @returns { Object } Stack
 */
export class Stack {
  private stack: number[];
  constructor() {
    this.stack = new Array(0);
  }

  /**
   *
   * @param num an element to add the stack
   * @returns { void } void
   */
  public add(num: number): void {
    this.stack.push(num);
  }

  /**
   *
   * @returns { number | null } returns a number on the top of the stack or null if no elements in the stack
   */
  public remove(): number | null {
    const lastElement: number | undefined = this.stack.pop();
    return lastElement !== undefined ? lastElement : null;
  }

  /**
   *
   * @returns { number } returns the size of the stack
   */
  public size(): number {
    return this.stack.length;
  }

  /**
   *
   * @returns { number } returns the top of the stack
   */
  public top(): number {
    return this.stack.length ? this.stack[this.size() - 1] : -1;
  }

  /**
   * @returns { void } shows the elements in the stack in console
   */
  public show(): void {
    console.log(this.stack);
  }
}
