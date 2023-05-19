enum Directions {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}
// returns its index
console.log(Directions.UP);
console.log(Directions.DOWN);

// brackets can be used to call its value as well
console.log(Directions["LEFT"]);
console.log(Directions["RIGHT"]);

// its values can be called by index
console.log(Directions[0]);
console.log(Directions[1]);

// for...in loop retrieve all indices then values
console.log("for...in loop with enum");
let inc = 0;
for (const key in Directions) {
  console.log(`key: ${key}`);
}

// properties can be assigned values such as string, number
// boolean is not assignable
// function which returns string or number can be called to assign value;
// properties can be its other's values
enum Answer {
  true = "YES",
  false = "NO",
  One = returnOne(),
  Two = returnOne() + 1,
  OneOrTwo = One | Two,
}

function returnOne(): number {
  return 1;
}
const bool = true;
// const bool = false;
console.log(Answer[`${bool}`]);
