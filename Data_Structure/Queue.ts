export default class Queue {
  private queue: number[];
  
  constructor() {
    this.queue = new Array(0);
  }

  public enqueue(num: number): void {
    this.queue.push(num);
  }

  public dequeue(): number | null {
    const dequeued: number | undefined = this.queue.shift();
    return dequeued !== undefined ? dequeued : null;
  }

  public size(): number {
    return this.queue.length;
  }

  public show(): void {
    console.log(this.queue);
  }
}
