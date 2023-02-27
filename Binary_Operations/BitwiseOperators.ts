// Bitwise Operators
//! Javascript uses 32 bits binary operations
// the binary that is over 32 bits number after converted will be negative number.
// The example is as following:
// 1 ==> 00000000000000000000000000000001
// -1 ==> 11111111111111111111111111111110

class BitwiseOperation {
  constructor() {}

  /**
   * @example
   * AND:
   * 1 & 1 ==> 1
   * 1 & 0 ==> 0
   * 0 & 1 ==> 0
   * 0 & 0 ==> 0
   * @param { number } num1
   * @param { number } num2
   * @returns { number } number
   */
  public AND(num1: number, num2: number): number {
    console.log(`num1 is: ${num1.toString(2)}, num2 is: ${num2.toString(2)}`);
    console.log(`result in binary is: ${(num1 & num2).toString(2)}`);
    return num1 & num2;
  }

  /**
   * @example
   * OR:
   * 1 & 1 ==> 1
   * 1 & 0 ==> 1
   * 0 & 1 ==> 1
   * 0 & 0 ==> 0
   * @param { number } num1
   * @param { number } num2
   * @returns { number } number
   */
  public OR(num1: number, num2: number): number {
    console.log(`num1 is: ${num1.toString(2)}, num2 is: ${num2.toString(2)}`);
    console.log(`result in binary is: ${(num1 | num2).toString(2)}`);
    return num1 | num2;
  }

  /**
   * @example
   * XOR:
   * 1 & 1 ==> 0
   * 1 & 0 ==> 1
   * 0 & 1 ==> 1
   * 0 & 0 ==> 0
   * @param { number } num1
   * @param { number } num2
   * @returns { number } number
   */
  public XOR(num1: number, num2: number): number {
    console.log(`num1 is: ${num1.toString(2)}, num2 is: ${num2.toString(2)}`);
    console.log(`result in binary is: ${(num1 ^ num2).toString(2)}`);
    return num1 ^ num2;
  }

  /**
   * @example
   * NOT:
   *
   * 00000000000000000000000000001010 ==> 11111111111111111111111111110101
   * @param { number } num
   * @returns { number } number
   */
  public NOT(num: number): number {
    console.log(`input is: ${num.toString(2)}`);
    console.log(`result in binary is: ${(~num).toString(2)}`);
    return ~num;
  }
}

const calc: BitwiseOperation = new BitwiseOperation();

console.group("Bitwise AND operator");
console.log(calc.AND(1, 5));
console.log(calc.AND(7, 5));
console.log(calc.AND(3, 3));
console.log(calc.AND(3, 2));
console.groupEnd();

// ========================================================

console.group("Bitwise OR operator");
console.log(calc.OR(5, 1));
console.log(calc.OR(5, 4));
console.log(calc.OR(100, 34));
console.log(calc.OR(56, 21));
console.groupEnd();

// ========================================================

console.group("Bitwise XOR operator");
console.log(calc.XOR(5, 1));
console.log(calc.XOR(5, 4));
console.log(calc.XOR(100, 34));
console.log(calc.XOR(56, 21));
console.groupEnd();

// ========================================================

console.group("Bitwise NOT operator");
console.log(calc.NOT(5));
// As 32 bits integer, the binary that is over 32 bits number will be negative number
// The result is -6 because 0 that is leading in formt of the most left 1 will be 0
// 00000000000000000000000000000101(5)
//  => 0000000000000000000000000000010(2)
//  => 11111111111111111111111111111110(-6)
console.log(calc.NOT(4));
console.log(calc.NOT(100));
console.log(calc.NOT(56));
console.groupEnd();
