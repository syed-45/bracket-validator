function findMatchingBracketIndex(nest: string): number {
  const nestArray = nest.split("");

  if (nestArray[0] === "{") {
    return nestArray.findIndex((bracket) => bracket === "}");
  } else if (nestArray[0] === "[") {
    return nestArray.findIndex((bracket) => bracket === "]");
  } else {
    return nestArray.findIndex((bracket) => bracket === ")");
  }
}

export default findMatchingBracketIndex;
