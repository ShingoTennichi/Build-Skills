// Stack structure;

export class Stack {

  private stack: number[];

  constructor() {
    this.stack = new Array(0);
  }

  public add(num: number): void {
    this.stack.push(num);
  }

  public remove(): number | null {
    const lastElement: number | undefined = this.stack.pop();
    return lastElement !== undefined ? lastElement : null;
  }

  public size(): number {
    return this.stack.length;
  }

  public top(): number {
    return this.stack.length ? this.stack[this.size()-1] : -1;
  }

  public show(): void {
    console.log(this.stack);
  }
}
