console.log(`FOO BAR!`);

export function returnTwo(): number {
  return 2;
}

console.log({ two: returnTwo() });
