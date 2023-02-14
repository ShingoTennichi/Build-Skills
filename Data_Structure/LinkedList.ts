//* A linked list is a linear data structure

/**
 * @param { number | null } val
 * @param { LinkedList | null } next
 */

export default class LinkedList {
  public val: number | null;
  public next: LinkedList | null;

  constructor(val: number | null = null, next: LinkedList | null = null) {
    this.val = val;
    this.next = next;
  }

  public elements(): void {
    const arr: Array<number | null> = new Array(0);
    let curNode: LinkedList | null = this;
    while (curNode !== null) {
      arr.push(curNode.val);
      curNode = curNode.next;
    }
    console.log(arr);
  }

  public static createNewList(arr: Array<number>): LinkedList {
    if (arr.length === 0) return new LinkedList();
    const root: LinkedList = new LinkedList(arr[0]);
    let curNode: LinkedList | null = root;
    for (let i = 1; i < arr.length; i++) {
      curNode.next = new LinkedList(arr[i]);
      curNode = curNode.next;
    }
    return root;
  }
}
