type Option = "MAX" | "MIN";

export default class PriorityQueue {
  _heap: number[];
  _head: number | null;
  _tail: number | null;
  _option: Option;

  constructor(option: Option = "MIN", nums: number[] | null = null) {
    this._heap = nums ?? new Array();
    this._option = option;
    this.head = null;
    this.tail = null;
    // if nums => heapify
    console.log(this._heap);
    console.log(this._option);
  }

  public static enqueue() {}

  public static dequeue() {}

  public get head(): number | null {
    return this._head;
  }

  public get tail(): number | null {
    return this._tail;
  }

  private heapify() {}

  private static heapifyUp(nums: number[]): void {}

  private static heapifyDown() {}

  private static swap(arr: number[], left: number, right: number[]) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }
}

const pq = new PriorityQueue();
